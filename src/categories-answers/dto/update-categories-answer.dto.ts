import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesAnswerDto } from './create-categories-answer.dto';

export class UpdateCategoriesAnswerDto extends PartialType(CreateCategoriesAnswerDto) {}
