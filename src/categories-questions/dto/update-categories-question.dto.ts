import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesQuestionDto } from './create-categories-question.dto';

export class UpdateCategoriesQuestionDto extends PartialType(CreateCategoriesQuestionDto) {}
