import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories_questions')
export class CategoriesQuestionsEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false })
	categoryId: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false })
	questionId: number;

	@CreateDateColumn()
	createdAt: Date;
}
