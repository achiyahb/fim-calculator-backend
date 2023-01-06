import { Module } from '@nestjs/common';
import { CategoriesQuestionsService } from './categories-questions.service';
import { CategoriesQuestionsController } from './categories-questions.controller';

@Module({
  controllers: [CategoriesQuestionsController],
  providers: [CategoriesQuestionsService]
})
export class CategoriesQuestionsModule {}
