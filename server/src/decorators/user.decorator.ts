import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const User = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { req } = ctx;
    const user = req?.user;

    return data ? user?.[data] : user;
  },
);
