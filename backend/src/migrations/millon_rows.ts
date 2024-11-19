import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1732014999005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      ALTER TABLE public.users ADD "surname" character varying(30) NOT NULL
      `,
    );

    await queryRunner.query(
      `
      ALTER TABLE public.users ADD "age" integer NOT NULL
      `,
    );

    await queryRunner.query(
      `
      ALTER TABLE public.users ADD "sex" "public"."users_sex_enum" NOT NULL
      `,
    );

    await queryRunner.query(
      `
       ALTER TABLE public.users ADD "problems" boolean NOT NULL DEFAULT false
      `,
    );

    await queryRunner.query(
      `
      ALTER TABLE public.users ADD "name" character varying(30) NOT NULL
      `,
    );
    await queryRunner.query(
      `
      INSERT INTO public.users (name, surname, age, sex, problems)
             SELECT
             COALESCE(substr(md5(random()::text), 1, 10), 'default_name'),
             COALESCE(substr(md5(random()::text), 1, 10), 'default_surname'),
             (random() * 70 + 10)::integer,
             (ARRAY['male', 'female'])[round(random())+1]::users_sex_enum,
             (random() > 0.5)::boolean
             FROM generate_series(1, 1000000);
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE public.user`);
  }
}
