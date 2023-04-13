import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../dots/createCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'danny@gmail.com',
      name: 'Danny Danny',
    },
    {
      id: 2,
      email: 'adam@gmail.com',
      name: 'Adam Adam',
    },
    {
      id: 3,
      email: 'spencer@gmail.com',
      name: 'Spencer Spencer',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => id === user.id);
  }

  getustomers() {
    return this.customers;
  }
  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
  }
}
