import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  professions = ['Programador', 'Empresário', 'Zelador', 'Outros'];
  profession = 'Outros';

  constructor() {
  }

  ngOnInit() {
  }

  save(userForm: NgForm) {
    console.log(userForm.value.profession);
  }
}
