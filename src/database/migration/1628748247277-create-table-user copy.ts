import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1628748247277 implements MigrationInterface {
  private readonly user = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isNullable: false,
        default: 'uuid_generate_v4()',
      },
      {
        name: 'name',
        type: 'uuid',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'email',
        type: 'uuid',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password',
        type: 'uuid',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isNullable: false,
        default: 'now()',
      },
      
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(this.user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.user);
  }
}
