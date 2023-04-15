import {
  Get,
  Controller,
  Post,
  Request,
  UseGuards,
  Session,
} from '@nestjs/common';

import {
  AuthenticatedGuard,
  LocalAuthGuard,
} from '../../../auth/utils/local-auth-guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {}

  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
    session.authenticated = true;
    return session;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  async getAuthStatus(@Request() req) {
    return req.user;
  }
}
