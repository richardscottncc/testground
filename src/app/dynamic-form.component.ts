import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private service: QuestionService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions)
    this.service.getData().subscribe(data => {
      this.questions = data;
      console.log(data)
    })
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
