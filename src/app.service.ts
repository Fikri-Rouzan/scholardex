import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      name: 'Scholardex API',
      status: 'active',
      message: 'Welcome to Scholardex API Services',
      timestamp: new Date().toISOString(),
    };
  }
}
