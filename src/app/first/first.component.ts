import { Component } from '@angular/core';
import { MatSlideToggleModule,  } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormBuilder} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  matDatepicker = '';

  longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste, consequuntur officiis doloremque laborum facilis consequatur repellendus ullam reiciendis ea magnam quam, voluptatum distinctio optio voluptate autem eum delectus! Architecto?';

  constructor(private _formBuilder: FormBuilder) {}

}
