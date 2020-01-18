import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cities = [
    {id: 1, name: 'Uberlândia'},
    {id: 2, name: 'São Paulo'},
    {id: 3, name: 'Florianópolis'},
    {id: 4, name: 'Curitiba'},
  ];
  headers = [
    'Código',
    'Nome',
    ''
  ];

  add(name: string) {
    alert(name);
  }

  delete(id: number) {
    alert(id);
  }

  update(city: any) {
    alert(JSON.stringify(city));
  }

}
