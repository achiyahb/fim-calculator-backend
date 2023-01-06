import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestsCategoriesService } from './tests-categories.service';
import { CreateTestsCategoryDto } from './dto/create-tests-category.dto';
import { UpdateTestsCategoryDto } from './dto/update-tests-category.dto';

@Controller('tests-categories')
export class TestsCategoriesController {
  constructor(private readonly testsCategoriesService: TestsCategoriesService) {}

  @Post()
  create(@Body() createTestsCategoryDto: CreateTestsCategoryDto) {
    return this.testsCategoriesService.create(createTestsCategoryDto);
  }

  @Get()
  findAll() {
    return this.testsCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testsCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestsCategoryDto: UpdateTestsCategoryDto) {
    return this.testsCategoriesService.update(+id, updateTestsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testsCategoriesService.remove(+id);
  }
}
