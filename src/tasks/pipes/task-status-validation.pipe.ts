import { TaskStatus } from './../task.model';

import {PipeTransform, BadRequestException}  from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {

     transform (value: any): any {
        value = value.toUpperCase();
        console.log(value);
        if(!this.isStatusValid(value)){
            throw new BadRequestException(`"${value}" is an invalid status`);
        }
        return value;
    }
    private isStatusValid(status:any){
      return Object.values(TaskStatus).includes(status); 
    }
}