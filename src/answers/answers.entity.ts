import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('answers')
export class AnswersEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ type: 'varchar', length: 256, nullable: false })
	description: string;
	@CreateDateColumn()
	createdAt: Date;
	@UpdateDateColumn()
	updatedAt: Date;
	@Column({ type: 'int', width: 10, nullable: false })
	score: number;
}
