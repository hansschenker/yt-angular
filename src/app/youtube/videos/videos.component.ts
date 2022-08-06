import { Component, OnInit } from '@angular/core';
import { Store } from '../store/store';
import { VideoState, initialState } from './video.types';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  constructor() {
    const video1 = {
      id: '1',
      title: 'Video 1',
      description: 'This is video 1',
      url: 'https://www.youtube.com/watch?v=1',
    };
    const videoState: VideoState = {
      Videos: [video1],
      Video: video1,
    };
    const store = new Store<VideoState>(initialState);
    store.updateState(videoState);

    store.stateChanges().subscribe(v => window.alert(JSON.stringify(v)));
  }

  ngOnInit(): void {}
}
