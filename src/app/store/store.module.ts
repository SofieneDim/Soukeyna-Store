import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreRoutingModule } from './store-routing.module';
import { TopBarComponent } from '../pages/top-bar/top-bar.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { CardComponent } from '../pages/card/card.component';

@NgModule({
  declarations: [ListComponent, AddComponent, TopBarComponent, CardComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class StoreModule {}
