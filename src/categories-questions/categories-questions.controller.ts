import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesQuestionsService } from './categories-questions.service';
import { CreateCategoriesQuestionDto } from './dto/create-categories-question.dto';
import { UpdateCategoriesQuestionDto } from './dto/update-categories-question.dto';

@Controller('categories-questions')
export class CategoriesQuestionsController {
  constructor(private readonly categoriesQuestionsService: CategoriesQuestionsService) {}

  @Post()
  create(@Body() createCategoriesQuestionDto: CreateCategoriesQuestionDto) {
    return this.categoriesQuestionsService.create(createCategoriesQuestionDto);
  }

  @Get()
  findAll() {
    return this.categoriesQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesQuestionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriesQuestionDto: UpdateCategoriesQuestionDto) {
    return this.categoriesQuestionsService.update(+id, updateCategoriesQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesQuestionsService.remove(+id);
  }
}
