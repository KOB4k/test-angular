import { Component, OnInit } from '@angular/core';
import { FormControlT } from 'src/models';
import { default as fromControlJson } from 'src/app/components/welcome/fromControl.json';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  formControl1 = fromControlJson.form;
  formControl2: FormControlT[] = [];

  other_type: any;
  constructor() { }

  ngOnInit(): void {
    this.formControl2 = this.formControl1
    // for (const f of this.formControl1) {
    //   this.formControl2.push(
    //     {
    //       ...f
    //     }
    //   )
    // }
  }

  onChangeRadio(idx: number, value: string): void {
    this.formControl2[idx].value = value;
  }

}
