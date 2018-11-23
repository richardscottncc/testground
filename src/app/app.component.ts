import { Component }       from '@angular/core';

import { QuestionService } from './question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions:Observable <any[]>;

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
