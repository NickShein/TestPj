import { NgModule } from '@angular/core';
import { EarthComponent } from './elemental-types-components/earth/earth.component';
import { WaterComponent } from './elemental-types-components/water/water.component';
import { WindComponent } from './elemental-types-components/wind/wind.component';
import { FireComponent } from './elemental-types-components/fire/fire.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  {path: 'wind', component: WindComponent},
  {path: 'water', component: WaterComponent},
  {path: 'fire', component: FireComponent},
  {path: 'earth', component: EarthComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}
