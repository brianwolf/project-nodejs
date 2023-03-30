import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ExampleEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    number: number

    @Column("text")
    string: string

    @Column("double")
    float: Double
}