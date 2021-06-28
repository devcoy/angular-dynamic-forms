import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../../domain/form/bases/question-base';
import { QuestionService } from '../../domain/form/services/question.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(_questionService: QuestionService) {
    this.questions$ = _questionService.getQuestions();
  }
}
