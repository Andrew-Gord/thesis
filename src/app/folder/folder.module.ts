import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { NgCalendarModule } from 'ionic7-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
