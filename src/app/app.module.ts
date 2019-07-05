import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { YoutobeComponent } from './youtobe/youtobe.component';
import { YoutobePlaylistComponent } from './youtobe-playlist/youtobe-playlist.component';
import {AppRoutingModule} from './app-routing.module';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';

@Injectable()
export class YoutobeService {
}
// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    YoutobeComponent,
    YoutobePlaylistComponent,
    DictionaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [YoutobeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
