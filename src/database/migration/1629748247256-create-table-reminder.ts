import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableReminder1629748247256 implements MigrationInterface {
  private readonly reminder = new Table({
    name: 'reminder',
    columns: [
      {
        name: 'reminderNumber',
        type: 'uuid',
        isPrimary: true,
        isNullable: false,
        default: 'uuid_generate_v4()',
      },
      {
        name: 'description',
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
      {
        name: 'statusCompleted',
        type: 'boolean',
        default: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(this.reminder);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.reminder);
  }
}
