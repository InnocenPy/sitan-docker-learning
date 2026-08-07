import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}


  @Get()
  Hello(){
    return this.service.hello();
  }

  @Get('list')
  list(): Promise<Task[]> {
    return this.service.findAll();
  }

  @Post()
  create(
    @Body('title') title: string,
    @Body('description') description?: string,
  ): Promise<Task> {
    return this.service.create(title, description);
  }

  @Put(':id/toggle')
  toggle(@Param('id') id: number): Promise<Task | null> {
    return this.service.toggle(+id);
  }
}
