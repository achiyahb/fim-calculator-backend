import { Module } from '@nestjs/common';
import { TestsCategoriesService } from './tests-categories.service';
import { TestsCategoriesController } from './tests-categories.controller';

@Module({
  controllers: [TestsCategoriesController],
  providers: [TestsCategoriesService]
})
export class TestsCategoriesModule {}
