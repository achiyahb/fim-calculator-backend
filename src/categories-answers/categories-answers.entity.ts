import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories_answers')
export class CategoriesAnswersEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false, name: 'category_id' })
	categoryId: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false, name: 'answer_id' })
	answerId: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;
}
