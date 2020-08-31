export class Person {
  id: number;
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
