import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dashboard1PageRoutingModule } from './dashboard1-routing.module';

import { Dashboard1Page } from './dashboard1.page';
import { SearchbarModule } from 'src/app/Components/searchbar/searchbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dashboard1PageRoutingModule,
    SearchbarModule
   
  ],
  declarations: [Dashboard1Page]
})
export class Dashboard1PageModule {}
