import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "estudiante"})
export class Estudiante {
    @PrimaryColumn({type: "varchar"})
    rut!: string;

    @Column({type: "varchar"})
    nombreCompleto!: string;
    
    @Column({type: "int"})
    edad!: number;
    @Column({type: "varchar"})
    curso!: string;
}