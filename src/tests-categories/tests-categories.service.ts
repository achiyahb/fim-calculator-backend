import { Injectable } from '@nestjs/common';
import { UpdateTestsCategoryDto } from './dto/update-tests-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TestsEntity } from '../tests/tests.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestsCategoriesService {
	constructor(
		@InjectRepository(TestsEntity)
		private readonly testsRepository: Repository<TestsEntity>
	) {}

	create(createTestsCategoryDto: TestsEntity) {
		return this.testsRepository.create(createTestsCategoryDto);
	}

	findAll() {
		return `This action returns all testsCategories`;
	}

	findOne(id: number) {
		return `This action returns a #${id} testsCategory`;
	}

	update(id: number, updateTestsCategoryDto: UpdateTestsCategoryDto) {
		return `This action updates a #${id} testsCategory`;
	}

	remove(id: number) {
		return `This action removes a #${id} testsCategory`;
	}
}
