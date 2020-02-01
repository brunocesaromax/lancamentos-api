import {Component, OnInit} from '@angular/core';
import {PersonFilter, PersonService} from '../person.service';
import {LazyLoadEvent} from 'primeng/api/lazyloadevent';
import {Person} from '../Person';

@Component({
  selector: 'app-persons-search',
  templateUrl: './persons-search.component.html',
  styleUrls: ['./persons-search.component.css']
})
export class PersonsSearchComponent implements OnInit {

  totalElements = 0;
  filter = new PersonFilter();
  persons: Person[] = [];
  headers = ['nome', 'cidade', 'estado', 'status', ''];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
  }

  search(page = 0) {
    this.filter.page = page;

    this.personService.search(this.filter)
      .subscribe(resp => {
        this.totalElements = resp.totalElements;
        this.persons = resp.content.map(person => Object.assign(new Person(), person));
        console.log(this.persons);
        // console.log(this.persons);
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  findAll() {
    this.personService.findAll()
      .subscribe(resp => {
        this.persons = Object.assign([], resp);
      });
  }

}
