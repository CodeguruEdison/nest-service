import { Module } from '@nestjs/common';
//import { AppController } from './contollers/app.controller';
//import { AppService } from './services/app.service';
//import { TaskModule } from './task/task.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule],
  /*controllers: [AppController],
  providers: [AppService],*/
})
export class AppModule {}
