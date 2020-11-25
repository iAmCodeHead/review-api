import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from 'typeorm';
import { Reviews } from '../Review';

@Entity()
export class Organizations extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @CreateDateColumn()
    public created_on: string;

    @CreateDateColumn()
    public created_by: number;

    @UpdateDateColumn()
    public modified_on: number;

    @UpdateDateColumn()
    public modified_by: string;

    @OneToMany('Reviews', (review: Reviews) => review.org)
    public reviews: Reviews[];
}
