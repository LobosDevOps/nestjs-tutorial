import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

Injectable();
export class VlidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('VlidateCustomer');
    const { authorization } = req.headers;
    // console.log(authorization);

    if (!authorization)
      return res
        .status(403)
        .send({ error: 'No Authorization Token Provieded !' });
    if (authorization === '123') {
      next();
    } else {
      return res
        .status(403)
        .send({ error: 'Invaild Authorization Token Provieded !' });
    }
  }
}
