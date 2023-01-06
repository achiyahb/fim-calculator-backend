import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories_answers')
export class CategoriesAnswersEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false })
	categoryId: number;

	@PrimaryColumn({ type: 'int', width: 10, nullable: false })
	answerId: number;

	@CreateDateColumn()
	createdAt: Date;
}
