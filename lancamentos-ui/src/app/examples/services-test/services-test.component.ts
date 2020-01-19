import {Component, OnInit} from '@angular/core';
import {CityService} from './city.service';

@Component({
  selector: 'app-services-test',
  templateUrl: './services-test.component.html',
  styleUrls: ['./services-test.component.css']
})
export class ServicesTestComponent implements OnInit {

  cities: any[] = [];
  headers = [
    'Código',
    'Nome',
    ''
  ];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.list();
  }

  add(name: string) {
    this.cityService.add({name}) // O mesmo que name: name
      .subscribe(data => {
        this.list();
      });
  }

  delete(id: number) {
    alert(id);
  }

  update(city: any) {
    alert(JSON.stringify(city));
  }

  list() {
    this.cityService.list()
      .subscribe(data => {
        this.cities = data;
      });
  }
}
