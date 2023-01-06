import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsModule } from './tests/tests.module';
import { CategoriesModule } from './categories/categories.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';
import { TestsCategoriesModule } from './tests-categories/tests-categories.module';
import { CategoriesAnswersModule } from './categories-answers/categories-answers.module';
import { CategoriesQuestionsModule } from './categories-questions/categories-questions.module';
import { mysqlConfig } from './configs/mysql.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';


@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [mysqlConfig],
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => {
				return {
					type: 'mysql',
					host: configService.get('mysql.host'),
					port: configService.get('mysql.port'),
					username: configService.get('mysql.username'),
					password: configService.get('mysql.password'),
					database: configService.get('mysql.database'),
					entities: configService.get('mysql.entities'),
					synchronize: true,
				};
			},
			inject: [ConfigService],
		}),
		TestsModule,
		CategoriesModule,
		QuestionsModule,
		AnswersModule,
		TestsCategoriesModule,
		CategoriesAnswersModule,
		CategoriesQuestionsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
