import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Example } from './model'

@Entity()
export class ExampleEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column("integer")
    number: number

    @Column("text")
    string: string

    @Column("double")
    float: number

    @Column("datetime")
    date: string

    constructor(
        number: number,
        string: string,
        float: number,
        id: number = null,
        date: string = new Date().toISOString()
    ) {
        this.id = id
        this.number = number
        this.string = string
        this.float = float
        this.date = date
    }

    toModel() {
        return new Example(
            this.number,
            this.string,
            this.float,
            this.id,
            new Date(this.date)
        )
    }

    static fromModel(m: Example) {
        return new ExampleEntity(
            m.number,
            m.string,
            m.float,
            m.id,
            m.date.toISOString()
        )
    }
}