// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
//   Param,
// } from '@nestjs/common';
// import { TaskService } from './task.service'; //コントローラにサービスを注入します。DIコンテナがTaskService型の引数があれば、自動で生成されます。CreateとReadのルーティングを実装します。
// // import { Task } from '../entities/task.entity';
// import { Task } from './models/task.models';
// import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';
// import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

// //Controllerの役割は、指定したパスでリクエストを受け取りレスポンスを返すことです。
// //Controllerはtask.module.tsファイルのControllersに登録することで、使えるようになります。
// @Controller('task') // @Controller() デコレータの適用と Route の指定
// export class TaskController {
//   constructor(private readonly service: TaskService) {} // 利用する Service が inject される

//   @Get() // HTTP メソッドの指定
//   async getTaskList(): Promise<Task[]> {
//     return await this.service.findAll(); // Service から得た値をレスポンスとして返す
//   }

//   @Post()
//   async addTask(@Body() task: CreateTaskDTO): Promise<InsertResult> {
//     // リクエストの Body を取得
//     return await this.service.create(task); // 受け取った値を Service に渡す
//   }

//   @Get(':id')
//   async getTask(@Param('id') id: string): Promise<Task> {
//     return await this.service.find(Number(id)); // Service から得た値をレスポンスとして返す
//   }

//   @Put(':id/update')
//   async update(
//     @Param('id') id: string,
//     @Body() task: UpdateTaskDTO,
//   ): Promise<UpdateResult> {
//     return await this.service.update(Number(id), task);
//   }

//   @Delete(':id')
//   async deleteTask(@Param('id') id: string): Promise<DeleteResult> {
//     return await this.service.delete(Number(id));
//   }
// }
