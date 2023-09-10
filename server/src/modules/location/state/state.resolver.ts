import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StateService } from './state.service';
import { State } from './entities/state.entity';
import { CreateStateInput } from './dto/create-state.input';
import { UpdateStateInput } from './dto/update-state.input';

@Resolver(() => State)
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Mutation(() => State)
  createState(@Args('createStateInput') createStateInput: CreateStateInput) {
    return this.stateService.create(createStateInput);
  }

  @Query(() => [State])
  findAllState() {
    return this.stateService.findAll();
  }

  @Query(() => State)
  findOneState(@Args('id', { type: () => Int }) id: number) {
    return this.stateService.findOne(id);
  }

  @Mutation(() => State)
  updateState(@Args('updateStateInput') updateStateInput: UpdateStateInput) {
    return this.stateService.update(updateStateInput.id, updateStateInput);
  }

  @Mutation(() => State)
  removeState(@Args('id', { type: () => Int }) id: number) {
    return this.stateService.remove(id);
  }
}
