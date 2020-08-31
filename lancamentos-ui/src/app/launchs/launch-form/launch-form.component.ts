import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../categories/category.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {PersonService} from '../../persons/person.service';
import {Launch} from '../../core/model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-launch-form',
  templateUrl: './launch-form.component.html',
  styleUrls: ['./launch-form.component.css']
})
export class LaunchFormComponent implements OnInit {
  types = [
    {label: 'Receita', value: 'RECEIPT'},
    {label: 'Despesa', value: 'EXPENSE'}
  ];

  categories = [];
  persons = [];
  launch = new Launch();

  constructor(private categoryService: CategoryService,
              private errorHandlerService: ErrorHandlerService,
              private personService: PersonService) {
  }

  ngOnInit() {
    this.loadCategories();
    this.loadPersons();
  }

  loadCategories() {
    return this.categoryService.findAll()
      .subscribe(categories => {
          this.categories = categories.map(c => ({label: c.name, value: c.id}));
        },
        error => this.errorHandlerService.handle(error)
      );
  }

  loadPersons() {
    return this.personService.findAll()
      .subscribe(persons => {
          this.persons = persons.map(p => ({label: p.name, value: p.id}));
        },
        error => this.errorHandlerService.handle(error)
      );
  }

  save(launchForm: NgForm) {
    console.log(this.launch);
  }
}
