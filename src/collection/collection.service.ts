import { Injectable } from '@nestjs/common';
import { Collection } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  async getCollections(type: string): Promise<Collection[]> {
    return this.prisma.collection.findMany({ where: { type } });
  }

  async getCollection(id: string): Promise<Collection | null> {
    return this.prisma.collection.findUnique({ where: { id } });
  }

  async createCollection(collection: Collection): Promise<Collection> {
    return this.prisma.collection.create({ data: collection });
  }

  async updateCollection(
    id: string,
    collection: Collection,
  ): Promise<Collection> {
    return this.prisma.collection.update({ where: { id }, data: collection });
  }

  async deleteCollection(id: string): Promise<Collection> {
    return this.prisma.collection.delete({ where: { id } });
  }
}
