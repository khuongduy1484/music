import { Component, OnInit } from '@angular/core';
import {YoutobeService} from './youtobe.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-youtobe',
  templateUrl: './youtobe.component.html',
  styleUrls: ['./youtobe.component.css']
})
export class YoutobeComponent implements OnInit {
  song: any;
  sub: Subscription;

  constructor(private youtobeService: YoutobeService, private activatedRouter: ActivatedRoute, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.youtobeService.find(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
