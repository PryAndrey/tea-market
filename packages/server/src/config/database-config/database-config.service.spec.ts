import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseConfigService } from './database-config.service';
import { ConfigService } from '@nestjs/config';

describe('DatabaseConfigService', () => {
  let service: DatabaseConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseConfigService, ConfigService],
    }).compile();

    service = module.get<DatabaseConfigService>(DatabaseConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
