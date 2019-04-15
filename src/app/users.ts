export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  phone: number;
  gender: string;
  city: string;
  age: number;

  constructor(values: Object ={}) {
    Object.assign(this, values);
  }
}
