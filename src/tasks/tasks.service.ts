import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  hello(): string {
    return '***SITAN INFORMATIQUE INNOCENT DEV***!';
  }

  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  create(title: string, description?: string): Promise<Task> {
    return this.taskRepo.save({ title, description });
  }

  async toggle(id: number): Promise<Task | null> {
    const task = await this.taskRepo.findOneBy({ id });
    if (task) {
      task.isCompleted = !task.isCompleted;
      return this.taskRepo.save(task);
    }
    return null;
  }
}
