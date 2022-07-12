import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from 'src/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// 以下要素から構成される
// providers: Nest injector によりインスタンス化される Provider で、Module 内でシェアされる
// controllers: Module で定義される Controller
// imports: Module で使用する Provider をエクスポートしている他の Module
// exports: Module からエクスポートされる Provider

@Module({
  controllers: [TaskController], // Controller の登録
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService], // Service の登録
})
export class TaskModule {}
