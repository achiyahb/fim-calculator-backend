import { Module } from '@nestjs/common';
import { CategoriesAnswersService } from './categories-answers.service';
import { CategoriesAnswersController } from './categories-answers.controller';

@Module({
	controllers: [CategoriesAnswersController],
	providers: [CategoriesAnswersService],
})
export class CategoriesAnswersModule {}
