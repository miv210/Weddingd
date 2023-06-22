import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDialogContext } from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent implements OnInit{
  numberItem: number;
  price: number;
  form1: FormGroup;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>,
  ) {}

  async submit(){
    let form = document.getElementById(
      'form'
    ) ;
    // let formData = new FormData(form)
    // await fetch('sendmail.php',{method: 'POST', body: new FormData(form)})
  }

  ngOnInit(){
    this.numberItem = this.context.data.item.number;
    this.price = this.context.data.item.price;
    this.form1 = new FormGroup({
      email: new FormControl(),
      numberPhone: new FormControl(),
      description: new FormControl()
    })
  }
}
