import { Test, TestingModule } from '@nestjs/testing';
import { TestsCategoriesService } from './tests-categories.service';

describe('TestsCategoriesService', () => {
	let service: TestsCategoriesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TestsCategoriesService],
		}).compile();

		service = module.get<TestsCategoriesService>(TestsCategoriesService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
