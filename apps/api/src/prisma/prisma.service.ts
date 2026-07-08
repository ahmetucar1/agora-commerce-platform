import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL || 'sqlite:./dev.db',
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Database connected successfully');
    } catch (error) {
      this.logger.warn('Database connection failed - proceeding without database');
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
    } catch (error) {
      this.logger.warn('Database disconnect failed');
    }
  }
}
