import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

//Moduleは、ControllerやServiceの依存関係を管理します。moduleファイルに対して、ControllerやServiceを登録することで、そのControllerやServiceが使えるようになります。
//Appモジュールがルートとなり、下位に各機能のモジュールが存在するイメージです。
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'radwimps123',
      database: 'todolist',
      entities: ['dist/entities/**/*.entity.js'],
      migrations: ['dist/migrations/**/*.js'],
      migrationsTableName: 'custom_migration_table',
      logging: false,
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
