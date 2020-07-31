
import { IsOptional, IsIn } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
export default class GetTasksFilterDto {
 @IsOptional() 
 @IsIn([TaskStatus.OPEN,TaskStatus.IN_PROGRESS,TaskStatus.DONE])  
 status:TaskStatus;
 search:string
}
//https://api.elephantsql.com/console/df0e6ebc-f714-464e-80d8-232591ada69b/browser?