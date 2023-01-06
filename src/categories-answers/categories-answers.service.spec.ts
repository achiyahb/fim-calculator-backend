import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesAnswersService } from './categories-answers.service';

describe('CategoriesAnswersService', () => {
	let service: CategoriesAnswersService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CategoriesAnswersService],
		}).compile();

		service = module.get<CategoriesAnswersService>(CategoriesAnswersService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
