import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesAnswersController } from './categories-answers.controller';
import { CategoriesAnswersService } from './categories-answers.service';

describe('CategoriesAnswersController', () => {
  let controller: CategoriesAnswersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesAnswersController],
      providers: [CategoriesAnswersService],
    }).compile();

    controller = module.get<CategoriesAnswersController>(CategoriesAnswersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
