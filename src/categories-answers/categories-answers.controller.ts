import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoriesAnswersService } from './categories-answers.service';
import { CreateCategoriesAnswerDto } from './dto/create-categories-answer.dto';
import { UpdateCategoriesAnswerDto } from './dto/update-categories-answer.dto';

@Controller('categories-answers')
export class CategoriesAnswersController {
	constructor(private readonly categoriesAnswersService: CategoriesAnswersService) {}

	@Post()
	create(@Body() createCategoriesAnswerDto: CreateCategoriesAnswerDto) {
		return this.categoriesAnswersService.create(createCategoriesAnswerDto);
	}

	@Get()
	findAll() {
		return this.categoriesAnswersService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.categoriesAnswersService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCategoriesAnswerDto: UpdateCategoriesAnswerDto) {
		return this.categoriesAnswersService.update(+id, updateCategoriesAnswerDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.categoriesAnswersService.remove(+id);
	}
}
