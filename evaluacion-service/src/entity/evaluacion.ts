import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "evaluacion"})
export class Evaluacion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar"})
    rut!: string;

    @Column({type: "varchar"})
    semestre!: string;
    
    @Column({type: "varchar"})
    asignatura!: string;
    @Column({type: "decimal"})
    nota!: number;
}