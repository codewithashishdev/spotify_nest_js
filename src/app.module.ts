import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevConfigService } from './common/providers/devConfigService';

const devConfig = { port: 3000 };
const proConfig = { port: 4000 };

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: DevConfigService,
      useClass: DevConfigService, // option 5
    },
    {
      provide:'CONFIG',
      useFactory:() =>{
        return process.env.NODE_ENV === 'development'? devConfig : proConfig;
      }
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // throw new Error("Not implemented")
    // option 1
    consumer.apply(LoggerMiddleware).forRoutes('songs');
    // option 2
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'songs', method: Request Method.POST });
    // option 3
    // consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}