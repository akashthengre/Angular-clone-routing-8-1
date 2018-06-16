
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';import { ColorroutingModule } from './colorrouting.module';

@NgModule({
  imports: [
    CommonModule,ColorroutingModule
  ],
  declarations: [RedComponent, GreenComponent]
})
export class ColorsModule { }
