import { Module } from '@nestjs/common';
//import { AppController } from './contollers/app.controller';
//import { AppService } from './services/app.service';
//import { TaskModule } from './task/task.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  /*controllers: [AppController],
  providers: [AppService],*/
})
export class AppModule {}
