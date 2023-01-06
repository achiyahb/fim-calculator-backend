import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tests_categories')
export class TestsCategoriesEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false })
	testId: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false })
	categoryId: number;

	@CreateDateColumn()
	createdAt: Date;
}
