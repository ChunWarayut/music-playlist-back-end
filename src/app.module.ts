import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { PrismaModule } from './prisma/prisma.module';
import { ItemModule } from './item/item.module';
import { MusicModule } from './music/music.module';

@Module({
  imports: [CollectionModule, PrismaModule, ItemModule, MusicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
