import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapivaraController } from './capivara.controller';
import { CapivaraService } from './capivara.service';
import { Capivara } from './capivara.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Capivara])],
    controllers: [CapivaraController],
    providers: [CapivaraService],
    exports: [CapivaraService],
})
export class CapivaraModule { }