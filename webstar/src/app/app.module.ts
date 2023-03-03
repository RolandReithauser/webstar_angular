import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NyertesComponent } from './nyertes/nyertes.component';
import { KarakterszerkComponent } from './karakterszerk/karakterszerk.component';
import { LukeComponent } from './luke/luke.component';
import { KarakterComponent } from './karakter/karakter.component';
import { HarcComponent } from './harc/harc.component';
import { DarthComponent } from './darth/darth.component';
import { FormsModule } from '@angular/forms';
import { BelepesComponent } from './belepes/belepes.component';

@NgModule({
  declarations: [
    AppComponent,
    NyertesComponent,
    KarakterszerkComponent,
    LukeComponent,
    KarakterComponent,
    HarcComponent,
    DarthComponent,
    BelepesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
