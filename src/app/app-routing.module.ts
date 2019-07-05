import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {YoutobeComponent} from './youtobe/youtobe.component';
import {NgModel} from '@angular/forms';
import {YoutobePlaylistComponent} from './youtobe-playlist/youtobe-playlist.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutobePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutobeComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
