import { PartialType } from '@nestjs/mapped-types';
import { CreateTestsCategoryDto } from './create-tests-category.dto';

export class UpdateTestsCategoryDto extends PartialType(CreateTestsCategoryDto) {}
