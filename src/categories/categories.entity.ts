import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('categories')
export class CategoriesEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ type: 'varchar', length: 100, nullable: false })
	name: string;
	@Column({ type: 'varchar', length: 256, nullable: false })
	description: string;

	@Column({ type: 'varchar', length: 256, nullable: false })
	questionsText: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column({ type: 'int', width: 10, nullable: false })
	scoreRange: number;
}
