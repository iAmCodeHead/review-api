import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public uuid: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column({ nullable: true, unique: true })
    public email: string;

    @Column()
    public password: string;

    @CreateDateColumn()
    public createdAt: string;

    @UpdateDateColumn()
    public updatedAt: string;
}
