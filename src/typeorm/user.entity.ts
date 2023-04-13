import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    nullable: false,
    default: '',
  })
  username: string;

  @Column('character varying', {
    nullable: false,
    default: '',
  })
  password: string;

  @Column('character varying', {
    nullable: true,
    default: '',
  })
  email: string;
}
