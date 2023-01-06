import { registerAs } from '@nestjs/config';
import { join } from 'path';

export const mysqlConfig = registerAs('mysql', () => ({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
  entities: [join(__dirname, '/src/**.entity{.ts,.js}')],
}));
