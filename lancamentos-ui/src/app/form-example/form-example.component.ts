import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

class Client {
  name: string;
  email: string;
  profession: string;
}

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  client = new Client();
  professions = ['Programador', 'Empresário', 'Zelador', 'Outros'];
  profession = 'Outros';

  constructor() {
  }

  ngOnInit() {
  }

  save(userForm: NgForm) {
    // this.client.name = userForm.value.name;
    // this.client.email = userForm.value.email;
    // this.client.profession = userForm.value.profession;
    // console.log(this.client);
    console.log(userForm);
  }
}
