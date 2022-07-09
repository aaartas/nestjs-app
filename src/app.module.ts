import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';

//Moduleは、ControllerやServiceの依存関係を管理します。moduleファイルに対して、ControllerやServiceを登録することで、そのControllerやServiceが使えるようになります。
//Applicationモジュールがルートとなり、下位に各機能のモジュールが存在するイメージです。
@Module({
  imports: [TypeOrmModule.forRoot(), TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
