import { CreateTaskDto } from './dto/create-task.dto';

import { Injectable, NotFoundException } from '@nestjs/common';
//import { v4 as uuidv4 } from 'uuid';
import { UpdateTaskDto } from './dto/update-task.dto';
import GetTasksFilterDto from './dto/get-task-filter.dto';
import TaskRepository from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task.model';
@Injectable()
export class TasksService {
   constructor(
        @InjectRepository(TaskRepository)
       private taskRepository:TaskRepository
   ){

   }
   getTasks(filterDto:GetTasksFilterDto):Promise<Task[]> {
        return this.taskRepository.getTasks(filterDto);
   }
   /**
    * 
    * @param id 
    */
   async getTaskById(id:number):Promise<Task> {
      const found= await this.taskRepository.findOne(id);
      if(!found){
        throw  new NotFoundException(`Task with Id "${id}" not found `);
      }
      return found;
   }
   /**
    * 
    * @param createDto 
    */
   async createTask(createDto:CreateTaskDto):Promise<Task> {
         return this.taskRepository.createTask(createDto);
   }
   /**
    * 
    * @param id 
    */
   async deleteTask(id:number):Promise<void> {
      const result = await this.taskRepository.delete(id);
      if(result.affected===0){
        throw  new NotFoundException(`Task with Id "${id}" not found `);
      }
    
   }
   
    // private tasks:Task[] =[];
    // constructor() {
    //     const newTask: Task = {id:'1',title:'title',description:'test',status:TaskStatus.DONE };
    //     this.tasks.push(newTask);
    // }

    // /** 
    // * Get all the Tasks;
    // *   @returns {Array}
    // */
    // getAllTask():Task[] {
    //     return this.tasks;
    // }
    // getTasksWithFilter(filterDto:GetTasksFilterDto):Task[] {

    //     let tasks = this.getAllTask();
    //     if(Object.keys(filterDto).length){
    //        const {status,search} =filterDto;
          
    //         if(status){
    //             tasks = tasks.filter(task=>task.status === status);
    //         }
    //         else {
    //             tasks = tasks.filter(task=>task.title.includes(search) ||
    //                     task.description.includes(search) )
    //         }
    //     }
    //     return tasks;
    // }
    // /**
    //  * Create a Task
    //  * @param title  
    //  * @param description 
    //  */
    
   /**
    * 
    * @param updateTaskDto 
    */
    
    

    async updateTask(updateTaskDto:UpdateTaskDto):Promise<Task> {
        const {status,id} = updateTaskDto;
        const foundTask = await this.getTaskById(id);
        foundTask.status= status
        await foundTask.save();
        return foundTask;

    }

}
