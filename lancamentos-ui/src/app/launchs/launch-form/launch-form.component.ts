import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../categories/category.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {PersonService} from '../../persons/person.service';
import {Launch} from '../../core/model';
import {NgForm} from '@angular/forms';
import {LaunchService} from '../launch.service';
import {ToastyService} from 'ng2-toasty';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-launch-form',
  templateUrl: './launch-form.component.html',
  styleUrls: ['./launch-form.component.css']
})
export class LaunchFormComponent implements OnInit {
  types = [
    {label: 'Receita', value: 'RECIPE'},
    {label: 'Despesa', value: 'EXPENSE'}
  ];

  categories = [];
  persons = [];
  launch = new Launch();

  constructor(private categoryService: CategoryService,
              private errorHandlerService: ErrorHandlerService,
              private personService: PersonService,
              private launchService: LaunchService,
              private toastyService: ToastyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const launchId = this.route.snapshot.params.id;

    if (launchId) {
      this.loadLaunch(launchId);
    }

    this.loadCategories();
    this.loadPersons();
  }

  get isEdit() {
    return Boolean(this.launch.id);
  }

  loadLaunch(id: number) {
    this.launchService.findById(id)
      .subscribe(launch => {
          this.launchService.stringsToDates(Array.of(launch));
          this.launch = launch;
        },
        error => this.errorHandlerService.handle(error));
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
    this.launchService.save(this.launch)
      .subscribe(() => {
          this.toastyService.success('Lançamento adicionando com sucesso!');
          launchForm.reset();
          this.launch = new Launch();
        },
        error => this.errorHandlerService.handle(error)
      );
  }
}
