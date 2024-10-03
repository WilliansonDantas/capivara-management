import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('capivara')
export class Capivara {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    peso: number;

    @Column()
    statusSaude: string;

    @Column()
    habitat: string;

    @Column()
    comportamento: string;

    @Column({ nullable: true })
    dieta?: string;

    @Column({ nullable: true })
    observacoes?: string;
}
