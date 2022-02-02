import { Test, TestingModule } from '@nestjs/testing';
import { MymoduleController } from './mymodule.controller';

describe('MymoduleController', () => {
  let controller: MymoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MymoduleController],
    }).compile();

    controller = module.get<MymoduleController>(MymoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
