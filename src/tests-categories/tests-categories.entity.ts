import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tests_categories')
export class TestsCategoriesEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false, name: 'test_id' })
	testId: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false, name: 'category_id' })
	categoryId: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;
}
