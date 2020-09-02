export class Address {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
}

export class Person {
  id: number;
  name: string;
  active = true;
  address = new Address();
}

export class Category {
  id: number;
}

export class Launch {
  id: string;
  description: string;
  dueDate: Date;
  payday: Date;
  value: number;
  observation: string;
  type = 'RECIPE';
  person = new Person();
  category = new Category();
}
