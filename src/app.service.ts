import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/devConfigService';

@Injectable()
export class AppService {
  constructor(
    private devconfigserver: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {}
  getHello(): string {
    return `Hello I learning Nest js Fundamental ${this.devconfigserver.getDBHOST()} PORT = ${this.config.port}`;
  }
}
