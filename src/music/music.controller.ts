import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MusicService } from './music.service';
import { Music } from '@prisma/client';

@Controller('music')
export class MusicController {
    constructor(private readonly musicService: MusicService) {}

    @Get()
    getMusics(): Promise<Music[]> {
        return this.musicService.getMusics();
    }

    @Get(':id')
    getMusic(@Param('id') id: string): Promise<Music | null> {
        return this.musicService.getMusic(id);
    }

    @Post()
    createMusic(@Body() music: Music): Promise<Music> {
        return this.musicService.createMusic(music);
    }

    @Put(':id')
    updateMusic(@Param('id') id: string, @Body() music: Music): Promise<Music> {
        return this.musicService.updateMusic(id, music);
    }

    @Delete(':id')
    deleteMusic(@Param('id') id: string): Promise<Music> {
        return this.musicService.deleteMusic(id);
    }
}
