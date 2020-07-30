import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService) {


    }

    @Get()
    getAllTasks():Task[] {
     return this.taskService.getAllTask();
    }
    @Post()
   // createTask(@Body() payload:Partial<Task>):void {
    createTask(
        @Body('title') title:string,
        @Body('description') description:string
        ):Task {
        //console.log(title);
       return  this.taskService.createTask(title,description);
    }

}
