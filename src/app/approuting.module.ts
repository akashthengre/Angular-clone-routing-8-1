import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './fruits/apple/apple.component';
import { GreenComponent } from './colors/green/green.component';



const routes: Routes = [
  {path:'colors/green/:id',component:GreenComponent},
  {path:'colors',loadChildren:'./colors/colors.module#ColorsModule'}
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ApproutingModule { }
