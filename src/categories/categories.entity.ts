import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('categories')
export class CategoriesEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ type: 'varchar', length: 100, nullable: false })
	name: string;
	@Column({ type: 'varchar', length: 256, nullable: false })
	description: string;

	@Column({ type: 'varchar', length: 256, nullable: false, name: 'question_text' })
	questionsText: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;

	@Column({ type: 'int', width: 10, nullable: false, name: 'score_range' })
	scoreRange: number;
}
