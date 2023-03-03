import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelepesComponent } from './belepes/belepes.component';
import { DarthComponent } from './darth/darth.component';
import { HarcComponent } from './harc/harc.component';
import { KarakterComponent } from './karakter/karakter.component';
import { KarakterszerkComponent } from './karakterszerk/karakterszerk.component';
import { LukeComponent } from './luke/luke.component';
import { NyertesComponent } from './nyertes/nyertes.component';

const routes: Routes = [
  {path: "darth", component:DarthComponent},
  {path: "harc", component:HarcComponent},
  {path: "karakter", component:KarakterComponent},
  {path: "karakterszerk", component:KarakterszerkComponent},
  {path: "luke", component:LukeComponent},
  {path: "nyertes", component:NyertesComponent},
  {path: "belepes", component:BelepesComponent},
  {path: "", redirectTo: "belepes", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
