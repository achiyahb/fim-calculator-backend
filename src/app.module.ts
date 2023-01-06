import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsModule } from './tests/tests.module';
import { CategoriesModule } from './categories/categories.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { TestsCategoriesModule } from './tests-categories/tests-categories.module';
import { CategoriesAnswersModule } from './categories-answers/categories-answers.module';
import { CategoriesQuestionsModule } from './categories-questions/categories-questions.module';

@Module({
  imports: [TestsModule, CategoriesModule, QuestionsModule, AnswersModule, TestsCategoriesModule, CategoriesAnswersModule, CategoriesQuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
