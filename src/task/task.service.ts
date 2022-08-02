import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './models/task.models';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async create(Task: CreateTaskDTO): Promise<InsertResult> {
    return await this.taskRepository.insert(Task);
  }

  async find(id: string): Promise<Task> | null {
    const result = await this.taskRepository.findOne({ task_id: id });
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async update(id: number, Task): Promise<UpdateResult> {
    return await this.taskRepository.update(id, Task);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
