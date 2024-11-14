import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from '@prisma/client';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getItems(@Query() query: { collectionId: string }): Promise<Item[]> {
    return this.itemService.getItems(query.collectionId);
  }

  @Get(':id')
  getItem(@Param('id') id: string): Promise<Item | null> {
    return this.itemService.getItem(id);
  }

  @Post()
  createItem(@Body() item: Item): Promise<Item> {
    return this.itemService.createItem(item);
  }

  @Put(':id')
  updateItem(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemService.updateItem(id, item);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string): Promise<Item> {
    return this.itemService.deleteItem(id);
  }
}
