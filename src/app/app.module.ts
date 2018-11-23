import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap: [ AppComponent ],
  providers: [QuestionService]
})
export class AppModule {
  constructor() {
  }
}
