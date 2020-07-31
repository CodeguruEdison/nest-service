import { CreateTaskDto } from './dto/create-task.dto';

import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param, Delete, Patch, Put, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import GetTasksFilterDto from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService) {


    }
    /**
     * 
     * @param filterDto 
     */
    @Get()
    getTasks(@Query(ValidationPipe) filterDto:GetTasksFilterDto):Promise<Task[]> {
        console.log(filterDto);
        return this.taskService.getTasks(filterDto);
    }

    /**
     * 
     * @param createTaskDto 
     */
    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() createTaskDto:CreateTaskDto
        ):Promise<Task> {
       return   this.taskService.createTask(createTaskDto);
    }
    /**
     * 
     * @param id 
     */
    @Get('/:id')
    getTaskById(@Param('id',ParseIntPipe) id:number):Promise<Task> {
        return this.taskService.getTaskById(id);
    }
    /**
     * 
     * @param id 
     */
    @Delete('/:id')
     deleteTaskById(@Param('id',ParseIntPipe) id:number): Promise<void> {
        return this.taskService.deleteTask(id);
    }
    /**
     * 
     * @param id 
     * @param status 
     */
    @Patch('/:id/status')
    updateTaskStatus(@Param('id',ParseIntPipe) id:number,
                    @Body('status',TaskStatusValidationPipe) status:TaskStatus):Promise<Task>
    {
         return this.taskService.updateTask({status,id})
    }


}
