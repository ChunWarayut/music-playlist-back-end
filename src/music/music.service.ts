import { Injectable } from '@nestjs/common';
import { Music } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MusicService {
    constructor(private prisma: PrismaService) {}

    async getMusics(): Promise<Music[]> {
        return this.prisma.music.findMany();
    }

    async getMusic(id: string): Promise<Music | null> {
        return this.prisma.music.findUnique({ where: { id } });
    }

    async createMusic(music: Music): Promise<Music> {
        return this.prisma.music.create({ data: music });
    }

    async updateMusic(id: string, music: Music): Promise<Music> {
        return this.prisma.music.update({ where: { id }, data: music });
    }

    async deleteMusic(id: string): Promise<Music> {
        return this.prisma.music.delete({ where: { id } });
    }
}
