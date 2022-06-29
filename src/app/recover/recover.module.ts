import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPageRoutingModule } from './recover-routing.module';

import { RecoverPage } from './recover.page';
import { LoginWrapperComponent } from '../components/login-wrapper/login-wrapper.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecoverPageRoutingModule],
  declarations: [RecoverPage, LoginWrapperComponent],
})
export class RecoverPageModule {}
