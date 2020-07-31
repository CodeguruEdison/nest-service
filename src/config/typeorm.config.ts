import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig:TypeOrmModuleOptions = {
    type:'postgres',
    host:'ruby.db.elephantsql.com',
    port:5432,
    username:'sayngzhh',
    password:'AX5jGDaoQKD2lgrPg_EMJaxw00CWa0OH',
    database:'sayngzhh',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize:true,
    
    
};