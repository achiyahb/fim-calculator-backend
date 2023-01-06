import { Test, TestingModule } from '@nestjs/testing';
import { TestsCategoriesController } from './tests-categories.controller';
import { TestsCategoriesService } from './tests-categories.service';

describe('TestsCategoriesController', () => {
  let controller: TestsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestsCategoriesController],
      providers: [TestsCategoriesService],
    }).compile();

    controller = module.get<TestsCategoriesController>(TestsCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
