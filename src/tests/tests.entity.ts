import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('tests')
export class TestsEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 256, nullable: false })
	name: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column({ type: 'varchar', length: 256, nullable: false })
	description: string;

	@Column({ type: 'varchar', length: 256, nullable: false })
	instructions: string;
}
