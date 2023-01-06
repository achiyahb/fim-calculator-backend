import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories_questions')
export class CategoriesQuestionsEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false, name: 'category_id' })
	categoryId: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false, name: 'question_id' })
	questionId: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;
}
