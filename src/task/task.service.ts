import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './task.dto';

//Serviceでは、Controllerによりルーティングされたリクエストの処理を行います。
//Serviceはtask.module.tsファイルのprovidersに登録することで、ControllerでServiceの定義を行えます。
@Injectable() // @Injectable() デコレータの適用
export class TaskService {
  constructor(
    @InjectRepository(Task) //DIコンテナが登録された
    private readonly taskRepository: Repository<Task>,
  ) {}
  //以下、CRUDのロジック。
  async findAll(): Promise<Task[]> {
    // サービスが提供するビジネスロジックを定義
    return await this.taskRepository.find();
  }

  async create(Task: CreateTaskDTO): Promise<InsertResult> {
    return await this.taskRepository.insert(Task);
  }

  async find(id: number): Promise<Task> | null {
    return await this.taskRepository.findOne({ task_id: id });
  }

  async update(id: number, Task): Promise<UpdateResult> {
    return await this.taskRepository.update(id, Task);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
