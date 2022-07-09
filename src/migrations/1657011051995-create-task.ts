import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTask1657011051995 implements MigrationInterface {
  name = 'createTask1657011051995';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`todolist\`.\`task\` (\`task_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(20) NOT NULL, \`due_date\` date NOT NULL, \`status\` tinyint(1) NOT NULL DEFAULT '1', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`task_id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`todolist\`.\`task\``);
  }
}
