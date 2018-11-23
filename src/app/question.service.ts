import { Injectable }       from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { map } from 'rxjs/operators'
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  constructor (private http: HttpClient) {}

 

public getQuestions() {
  return this.http
             .get<QuestionBase<any>[]>('https://jsonplaceholder.typicode.com/todos').pipe(
             map(response => {
                const questions = response as [];
              console.log(questions);
                 return questions || [];
             })
           
             );
}
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  // getQuestions() {

  //   let questions: QuestionBase<any>[] = [

  //     new DropdownQuestion({
  //       key: 'brave',
  //       label: 'Bravery Rating',
  //       options: [
  //         {key: 'solid',  value: 'Solid'},
  //         {key: 'great',  value: 'Great'},
  //         {key: 'good',   value: 'Good'},
  //         {key: 'unproven', value: 'Unproven'}
  //       ],
  //       order: 3
  //     }),

  //     new TextboxQuestion({
  //       key: 'firstName',
  //       label: 'First name',
  //       value: 'Bombasto',
  //       required: true,
  //       order: 1
  //     }),

  //     new TextboxQuestion({
  //       key: 'emailAddress',
  //       label: 'Email',
  //       type: 'email',
  //       order: 2
  //     })
  //   ];

  //   return questions.sort((a, b) => a.order - b.order);
  // }
}
