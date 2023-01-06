import { Injectable } from '@nestjs/common';
import { CreateCategoriesAnswerDto } from './dto/create-categories-answer.dto';
import { UpdateCategoriesAnswerDto } from './dto/update-categories-answer.dto';

@Injectable()
export class CategoriesAnswersService {
  create(createCategoriesAnswerDto: CreateCategoriesAnswerDto) {
    return 'This action adds a new categoriesAnswer';
  }

  findAll() {
    return `This action returns all categoriesAnswers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriesAnswer`;
  }

  update(id: number, updateCategoriesAnswerDto: UpdateCategoriesAnswerDto) {
    return `This action updates a #${id} categoriesAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriesAnswer`;
  }
}
