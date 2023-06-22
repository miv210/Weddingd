import { Component, OnInit, Inject, Injector, HostListener} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import { DialogWindowComponent } from './components/dialog-window/dialog-window.component';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WeddingDay';

  catalogItems: Array<any>;
  serviceItems: Array<any>;
  maxWidth: any;
  money = 1000;
  mobile: boolean;
  open = false;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    const query = '(max-width: 425px)';
    this.maxWidth= window.matchMedia(query);
    this.mobile = this.maxWidth.matches;
  }


  readonly options: Partial<TuiSheetOptions> = {
      overlay: true,
  };

  toggle(): void {
      this.open = !this.open;
  }

  ngOnInit(): void {

    const query = '(max-width: 425px)';
    this.maxWidth= window.matchMedia(query);
    this.mobile = this.maxWidth.matches;
    // return mediaQueryList.matches;

    this.catalogItems = [
      {
        img: '../assets/images/item_1.jpg',
        number: 4762,
        price: 25400
      },
      {
        img: '../assets/images/item_2.jpg',
        number: 1906,
        price: 30900
      },
      {
        img: '../assets/images/item_3.jpg',
        number: 3512,
        price: 18500
      },
      {
        img: '../assets/images/item_4.jpg',
        number: 4115,
        price: 20400
      },
      {
        img: '../assets/images/item_5.jpg',
        number: 4015,
        price: 18300
      },
      {
        img: '../assets/images/item_6.jpg',
        number: 1475,
        price: 22700
      },
      {
        img: '../assets/images/item_7.jpg',
        number: 2060,
        price: 34300
      },
      {
        img: '../assets/images/item_8.jpg',
        number: 1255,
        price: 25400
      },
    ];

    this.serviceItems = [
      {
        img: '../assets/icons/service_item_1.png',
        title: 'бесплатная подгонка по фигуре'
      },
      {
        img: '../assets/icons/service_item_2.png',
        title: 'бесплатная консультация'
      },
      {
        img: '../assets/icons/service_item_3.png',
        title: 'хранение платья до свадьбы'
      },
      {
        img: '../assets/icons/service_item_4.png',
        title: 'отпаривание бесплатно'
      },
    ]
  }

  showDialogCretaeOrder(item:any){
    let dialog = this.dialogs.open<any>(
      new PolymorpheusComponent(DialogWindowComponent, this.injector),
      {
        data:{
          item: item
        },
        dismissible: true,
        size: 'auto',
      }
    )
    dialog.subscribe()
  }

  withdraw(): void {
    this.money -= 100;
  }

  
}
