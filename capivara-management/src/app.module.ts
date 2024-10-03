import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Capivara } from './capivara/capivara.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapivaraModule } from './capivara/capivara.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'capivara_management',
      entities: [Capivara],
      synchronize: true,
    }),
    CapivaraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
