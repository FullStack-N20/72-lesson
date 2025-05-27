import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function start() {
  const PORT = Number(process.env.PORT)
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
}
start();
