import { QuestionBase } from '../bases/question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
}
