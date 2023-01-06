import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesQuestionsService } from './categories-questions.service';

describe('CategoriesQuestionsService', () => {
  let service: CategoriesQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesQuestionsService],
    }).compile();

    service = module.get<CategoriesQuestionsService>(CategoriesQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
