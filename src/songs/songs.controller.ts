import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreatSeongsDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

// @Controller('songs')
@Controller({
  path: 'songs',
  scope: Scope.REQUEST,
})
export class SongsController {
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log('Connection String:', connection.DB);
  }

  @Post()
  create(@Body() createSongDTO: CreatSeongsDTO) {
    try {
      return this.songsService.create(createSongDTO);
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e,
        },
      );
    }
  }
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e,
        },
      );
    }
  }
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
      // ParseIntPipe
    )
    id: number,
  ) {
    return `find songs based on id ${id} and type ${typeof id}`;
  }

  @Put(':id')
  update() {
    return 'update songs based on id';
  }
  @Delete(':id')
  delete() {
    return 'delete songs based on id';
  }
}
