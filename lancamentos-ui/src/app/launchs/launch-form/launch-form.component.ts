import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../categories/category.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { PersonService } from '../../persons/person.service';
import { Launch } from '../../core/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaunchService } from '../launch.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  // launch = new Launch();
  ptBrLocale: any;

  form: FormGroup;

  constructor(private categoryService: CategoryService,
              private errorHandlerService: ErrorHandlerService,
              private personService: PersonService,
              private launchService: LaunchService,
              private toastyService: ToastyService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private title: Title) {
  }

  get isEdit() {
    return Boolean(this.form.get('id').value);
  }

  ngOnInit() {
    this.configureForm();
    this.title.setTitle('Novo lançamento');

    const launchId = this.activatedRoute.snapshot.params.id;

    if (launchId) {
      this.loadLaunch(launchId);
    }

    this.loadCategories();
    this.loadPersons();

    this.ptBrLocale = {
      closeText: 'Fechar',
      prevText: 'Anterior',
      nextText: 'Próximo',
      currentText: 'Começo',
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      weekHeader: 'Semana',
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',
      timeOnlyTitle: 'Só Horas',
      timeText: 'Tempo',
      hourText: 'Hora',
      minuteText: 'Minuto',
      secondText: 'Segundo',
      ampm: false,
      month: 'Mês',
      week: 'Semana',
      day: 'Dia',
      allDayText: 'Todo o Dia'
    };
  }

  configureForm() {
    this.form = this.formBuilder.group({
      id: [],
      type: ['RECIPE', Validators.required],
      dueDate: [null, Validators.required],
      payday: [],
      description: [null, [Validators.required, Validators.minLength(5)]],
      value: [null, Validators.required],
      person: this.formBuilder.group({
        id: [null, Validators.required],
        name: []
      }),
      category: this.formBuilder.group({
        id: [null, Validators.required],
        name: []
      }),
      observation: []
    });
  }

  loadLaunch(id: number) {
    this.launchService.findById(id)
      .subscribe(launch => {
          this.launchService.stringsToDates(Array.of(launch));
          // this.launch = launch;
          this.form.setValue(launch);
          this.updateEditTitle();
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

  save() {
    if (this.isEdit) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.launchService.save(this.form.value)
      .subscribe(launchSaved => {
          this.toastyService.success('Lançamento adicionando com sucesso!');
          // Aplicando navegação imperativa
          this.router.navigate(['/launchs', launchSaved.id]);
        },
        error => this.errorHandlerService.handle(error)
      );
  }

  update() {
    this.launchService.update(this.form.value)
      .subscribe(launchUpdated => {
          this.launchService.stringsToDates(Array.of(launchUpdated));
          // this.launch = launchUpdated;
          this.form.setValue(launchUpdated);
          this.updateEditTitle();
          this.toastyService.success('Lançamento atualizado com sucesso!');
        },
        error => this.errorHandlerService.handle(error)
      );
  }

  new() {
    // Poderia apenas utilizar o routerLink nesse caso
    // launchForm.reset();
    this.form.reset();

    // Função necessária para não perder o tipo do lançamento
    setTimeout(function() {
      this.launch = new Launch();
    }.bind(this), 1);

    this.router.navigate(['/launchs/new']);
  }

  updateEditTitle() {
    this.title.setTitle(`Edição de lançamento: ${this.form.get('description').value}`);
  }
}
