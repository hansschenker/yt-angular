import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [
  { path: '', component: PlaylistsComponent },
  { path: 'videos', loadChildren: () => import('../videos/videos.module').then(m => m.VideosModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
