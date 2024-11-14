import { Injectable } from '@nestjs/common';
import { Item } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemService {
    constructor(private prisma: PrismaService) {}

    async getItems(collectionId: string): Promise<Item[]> {
        return this.prisma.item.findMany({ where: { collectionId } });
    }

    async getItem(id: string): Promise<Item | null> {
        return this.prisma.item.findUnique({ where: { id } });
    }

    async createItem(item: Item): Promise<Item> {
        return this.prisma.item.create({ data: item });
    }

    async updateItem(id: string, item: Item): Promise<Item> {
        return this.prisma.item.update({ where: { id }, data: item });
    }

    async deleteItem(id: string): Promise<Item> {
        return this.prisma.item.delete({ where: { id } });
    }
}
