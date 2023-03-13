import {Component, OnInit} from '@angular/core';
import {Word} from '../../../../model/word';
import {DictionaryService} from '../../../../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  yourWord: Word;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      const word = data.get('word');
      this.yourWord = this.dictionaryService.findByWord(word);
    });
  }
}
