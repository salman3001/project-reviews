import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateResolver } from './state.resolver';

@Module({
  providers: [StateResolver, StateService],
})
export class StateModule {}
