import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { Collection } from '@prisma/client';

@Controller('collection')
export class CollectionController {
    constructor(private readonly collectionService: CollectionService) {}

    @Get()
    getCollections(@Query() query: { type: string }): Promise<Collection[]> {
        return this.collectionService.getCollections(query.type);
    }

    @Get(':id')
    getCollection(@Param('id') id: string): Promise<Collection | null> {
        return this.collectionService.getCollection(id);
    }

    @Post()
    createCollection(@Body() collection: Collection): Promise<Collection> {
        return this.collectionService.createCollection(collection);
    }

    @Put(':id')
    updateCollection(@Param('id') id: string, @Body() collection: Collection): Promise<Collection> {
        return this.collectionService.updateCollection(id, collection);
    }

    @Delete(':id')
    deleteCollection(@Param('id') id: string): Promise<Collection> {
        return this.collectionService.deleteCollection(id);
    }
}
