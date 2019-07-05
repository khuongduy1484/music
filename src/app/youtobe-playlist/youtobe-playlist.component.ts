import { Component, OnInit } from '@angular/core';
import {YoutobeService} from '../youtobe/youtobe.service';

@Component({
  selector: 'app-youtobe-playlist',
  templateUrl: './youtobe-playlist.component.html',
  styleUrls: ['./youtobe-playlist.component.css']
})
export class YoutobePlaylistComponent implements OnInit {

  constructor(public youtobeService: YoutobeService) { }

  ngOnInit() {
  }

}
