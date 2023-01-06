import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesQuestionsController } from './categories-questions.controller';
import { CategoriesQuestionsService } from './categories-questions.service';

describe('CategoriesQuestionsController', () => {
  let controller: CategoriesQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesQuestionsController],
      providers: [CategoriesQuestionsService],
    }).compile();

    controller = module.get<CategoriesQuestionsController>(CategoriesQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
