import { Injectable, Scope } from '@nestjs/common';

@Injectable(
  // {
    // scope:Scope.TRANSIENT
  // }
)
export class SongsService {
  private readonly songs = [];
  // connect with loca db

  create(song) {
    //save the song with db
    this.songs.push(song);
    return song;
  }

  findAll(): string[] {
    //fetch thes songs with db
    // throw new Error('Error in Db while fetching records');
    return this.songs;
  }
}
