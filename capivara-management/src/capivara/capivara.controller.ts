import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateCapivaraDto } from 'src/capivara/dto/create.capivara.dto';
import { UpdateCapivaraDto } from 'src/capivara/dto/update.capivara.dto';
import { CapivaraService } from './capivara.service';

@Controller('capivaras')
export class CapivaraController {
    constructor(private readonly capivaraService: CapivaraService) { }

    @Get()
    findAll() {
        return this.capivaraService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.capivaraService.findOne(id);
    }

    @Post()
    create(@Body() createCapivaraDto: CreateCapivaraDto) {
        return this.capivaraService.create(createCapivaraDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCapivaraDto: UpdateCapivaraDto) {
        return this.capivaraService.update(id, updateCapivaraDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.capivaraService.delete(id);
    }
}
