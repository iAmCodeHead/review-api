import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Organizations } from '../Organizations';

@Entity()
export class Reviews extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public uuid: string;

    @Column()
    public orgId: number;

    @Column()
    public reviewer: string;

    @Column()
    public review: string;

    @Column({ default: false })
    public isValidated: boolean;

    @CreateDateColumn()
    public created_on: string;

    @UpdateDateColumn()
    public modified_on: number;

    @UpdateDateColumn()
    public modified_by: string;

    @ManyToOne(() => Organizations, (org: Organizations) => org.reviews)
    public org: Organizations;
}
