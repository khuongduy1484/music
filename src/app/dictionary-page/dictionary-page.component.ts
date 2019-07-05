import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from './dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
word: IWord;
  constructor(private dictionary: DictionaryService) { }
search(word: string) {
    const meanging = this.dictionary.search(word);
    this.word = {
      key: word,
      meaning: meanging
    };
}
  ngOnInit() {
  }

}
