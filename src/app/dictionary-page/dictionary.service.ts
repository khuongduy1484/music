import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [{
    key: 'service', meaning: 'dich vu'
  },
    {key: 'service provider', meaning: 'nhàcungcấpdịchvụ'},
    {key: 'provide', meaning: 'cungcấp'},
    {key: 'efficient', meaning: 'hiệuquả'},
    {key: 'snow', meaning: 'tuyết'}];

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());

    if (w) {
      return w.meaning;
    }
    return 'not found';
  }
}
export interface IWord {
  key: string;
  meaning: string;
}
