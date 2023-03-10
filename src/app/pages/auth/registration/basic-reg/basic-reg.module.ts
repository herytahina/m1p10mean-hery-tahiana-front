import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BasicRegComponent } from './basic-reg.component';
import {BasicRegRoutingModule} from './basic-reg-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicRegRoutingModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [BasicRegComponent]
})
export class BasicRegModule { }
