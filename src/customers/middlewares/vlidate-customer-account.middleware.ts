import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

Injectable();
export class VlidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { vaild } = req.headers;
    // console.log(vaild);

    // console.log('VlidateCustomerAccount');
    if (vaild) {
      next();
    } else {
      return res.status(401).send({ error: 'Account is invaild !' });
    }
  }
}
