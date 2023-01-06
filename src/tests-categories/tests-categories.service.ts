import { Injectable } from '@nestjs/common';
import { CreateTestsCategoryDto } from './dto/create-tests-category.dto';
import { UpdateTestsCategoryDto } from './dto/update-tests-category.dto';

@Injectable()
export class TestsCategoriesService {
	create(createTestsCategoryDto: CreateTestsCategoryDto) {
		return 'This action adds a new testsCategory';
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
