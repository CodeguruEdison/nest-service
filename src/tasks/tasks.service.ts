import { Task, TaskStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class TasksService {

    private tasks:Task[] =[];
    constructor() {
        const newTask: Task = {id:'1',title:'title',description:'test',status:TaskStatus.DONE };
        this.tasks.push(newTask);
    }

    /** 
    * Get all the Tasks;
    *   @returns {Array}
    */
    getAllTask():Task[] {
        return this.tasks;
    }
    /**
     * Create a Task
     * @param title  
     * @param description 
     */
    createTask(title: string,description: string):Task {

        const task: Task = {
            id:uuidv4(),
            title,
            description,
            status:TaskStatus.OPEN
        };
        this.tasks.push(task)
        return task;
    }


}
