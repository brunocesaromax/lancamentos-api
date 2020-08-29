import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../categories/category.service';
import {ErrorHandlerService} from '../../core/error-handler.service';

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

  persons = [
    {label: 'João', value: 4},
    {label: 'Sebastião', value: 9},
    {label: 'Maria', value: 3},
  ];

  constructor(private categoryService: CategoryService,
              private errorHandlerService: ErrorHandlerService) {
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    return this.categoryService.findAll()
      .subscribe(categories => {
          this.categories = categories.map(c => ({label: c.name, value: c.id}));
        },
        error => this.errorHandlerService.handle(error)
      );
  }
}
