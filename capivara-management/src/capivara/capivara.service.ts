import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Capivara } from 'src/capivara/capivara.entity';
import { CreateCapivaraDto } from 'src/capivara/dto/create.capivara.dto';
import { UpdateCapivaraDto } from 'src/capivara/dto/update.capivara.dto';

@Injectable()
export class CapivaraService {
    constructor(
        @InjectRepository(Capivara)
        private capivaraRepository: Repository<Capivara>,
    ) { }

    async findAll(): Promise<Capivara[]> {
        return this.capivaraRepository.find();
    }

    async findOne(id: number): Promise<Capivara> {
        return this.capivaraRepository.findOne({ where: { id } });
    }

    async create(createCapivaraDto: CreateCapivaraDto): Promise<Capivara> {
        const newCapivara = this.capivaraRepository.create(createCapivaraDto);
        return this.capivaraRepository.save(newCapivara);
    }

    async update(id: number, updateCapivaraDto: UpdateCapivaraDto): Promise<Capivara> {
        await this.capivaraRepository.update(id, updateCapivaraDto);
        return this.capivaraRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.capivaraRepository.delete(id);
    }
}
