import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {
      word: 'apple',
      mean: 'qua tao'
    },
    {
      word: 'table',
      mean: 'cai ban'
    },
    {
      word: 'banana',
      mean: 'qua chuoi'
    },
    {
      word: 'sweets',
      mean: 'keo'
    },
    {
      word: 'chicken',
      mean: 'con ga'
    },
  ];

  constructor() {
  }

  findAll(): Word[] {
    return this.words;
  }

  findByWord(word: string) {
    return this.words.find(w => w.word === word);
  }
}
