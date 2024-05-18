import { Test, TestingModule } from '@nestjs/testing';
import { Nyobiv1Controller } from './nyobiv1.controller';

describe('Nyobiv1Controller', () => {
  let controller: Nyobiv1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Nyobiv1Controller],
    }).compile();

    controller = module.get<Nyobiv1Controller>(Nyobiv1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
