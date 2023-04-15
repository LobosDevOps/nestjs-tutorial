import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const result = (await super.canActivate(context)) as boolean;
    const reuest = context.switchToHttp().getRequest();
    await super.logIn(reuest);
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any> {
    const req = context.switchToHttp().getRequest<Request>();
    console.log('AuthenticatedGuard:', req.isAuthenticated());
    return req.isAuthenticated();
  }
}
