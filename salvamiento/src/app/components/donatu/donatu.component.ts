import { Component } from '@angular/core';

@Component({
  selector: 'app-donatu',
  templateUrl: './donatu.component.html',
  styleUrls: ['./donatu.component.scss']
})
export class DonatuComponent {
  //Bariableak
  izena: string = '';
  abizena: string = '';
  email: string = '';
  kantitatea: number = 0;
  kontua: string = '';

  //Formularioa balidatzeko metodoa
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Galdetegia ondo bidali da!', form.value);

    } else {
      console.log('Errorea galdetegia bidaltzerakoan!');
    }
  }
}
