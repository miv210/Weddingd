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
    let form = document.querySelector(
      'form');
    let formData = new FormData();
    formData.append('email',this.form1.get('email').value);
    formData.append('numberPhone', this.form1.get('numberPhone').value);
    formData.append('message', this.form1.get('description').value);
    formData.append('price', this.price.toString());
    formData.append('numberItem', this.numberItem.toString());
    await fetch('../../../sendmail.php',{method: 'POST', body: formData})
    this.context.completeWith('');
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
