import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'postgres',
        url: 'postgresql://neondb_owner:npg_Hd4Cj0efwuAi@ep-super-cake-a263p85b-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
        // url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
  ],
})
export class NeonDatabaseModule {}
