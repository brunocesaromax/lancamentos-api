import {Component, OnInit} from '@angular/core';
import {Person} from '../../core/model';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {PersonService} from '../person.service';
import {ToastyService} from 'ng2-toasty';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  person = new Person();

  constructor(private errorHandlerService: ErrorHandlerService,
              private personService: PersonService,
              private toastyService: ToastyService) {
  }

  ngOnInit() {
  }

  save(personForm: NgForm) {
    this.personService.save(this.person)
      .subscribe(() => {
          this.toastyService.success('Pessoa adicionanda com sucesso!');
          personForm.reset();
          this.person = new Person();
        },
        error => this.errorHandlerService.handle(error)
      );
  }
}
