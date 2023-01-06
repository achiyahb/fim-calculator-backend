import { Injectable } from '@nestjs/common';
import { CreateCategoriesQuestionDto } from './dto/create-categories-question.dto';
import { UpdateCategoriesQuestionDto } from './dto/update-categories-question.dto';

@Injectable()
export class CategoriesQuestionsService {
	create(createCategoriesQuestionDto: CreateCategoriesQuestionDto) {
		return 'This action adds a new categoriesQuestion';
	}

	findAll() {
		return `This action returns all categoriesQuestions`;
	}

	findOne(id: number) {
		return `This action returns a #${id} categoriesQuestion`;
	}

	update(id: number, updateCategoriesQuestionDto: UpdateCategoriesQuestionDto) {
		return `This action updates a #${id} categoriesQuestion`;
	}

	remove(id: number) {
		return `This action removes a #${id} categoriesQuestion`;
	}
}
