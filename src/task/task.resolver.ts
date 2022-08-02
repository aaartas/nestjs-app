import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { TaskService } from './task.service'; //
import { Task } from './models/task.models';
import { CreateTaskDTO, UpdateTaskDTO } from './task.dto';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

@Resolver()
export class TaskResolver {
  constructor(private readonly service: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  async getTaskList(): Promise<Task[]> {
    return await this.service.findAll();
  }

  // @Post()
  // async addTask(@Body() task: CreateTaskDTO): Promise<InsertResult> {
  //   return await this.service.create(task);

  @Query(() => Task)
  // GraphQL導入時、引数は@Paramでなく@Argsを用いる
  async getTask(@Args('id', { type: () => ID }) id: string): Promise<Task> {
    return await this.service.find(id);
  }

  // @Put(':id/update')
  // async update(
  //   @Args('id') id: string,
  //   @Body() task: UpdateTaskDTO,
  // ): Promise<UpdateResult> {
  //   return await this.service.update(Number(id), task);
  // }

  // @Delete(':id')
  // async deleteTask(@Args('id') id: string): Promise<DeleteResult> {
  //   return await this.service.delete(Number(id));
  // }
}
