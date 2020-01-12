export class EmployeeService {

  employees = [
    {id: 1, name: 'João'}
  ];

  lastId = 1;

  add(value: string) {
    const employee = {
      id: ++this.lastId,
      name: value
    };

    this.employees.push(employee);
    console.log(JSON.stringify(this.employees));
  }

  list() {
    return this.employees;
  }

}

export class EmployeeServiceAbbreviated extends EmployeeService {

  constructor(private numCharacters: number) {
    super();
  }

  add(value: string) {
    super.add(value.substr(0, this.numCharacters).concat('...'));
  }

}
