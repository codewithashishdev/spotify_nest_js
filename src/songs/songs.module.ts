import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

// const mockSongService = {
//   findAll() {
//     return [{ id: 1, title: 'lover' }];
//   },
//   create(song) {
//     return song;
//   }
// };

@Module({
  controllers: [SongsController],
  providers: [
    SongsService, // option -1,
    // {
    //   provide: SongsService, // option -2
    //   useClass: SongsService,
    // }
    // {
    //   provide: SongsService, // option -3
    //   useValue: mockSongService,
    // },
    {
      provide:'CONNECTION',// option -4
      useValue: connection,
    }
  ],
})
export class SongsModule {}
