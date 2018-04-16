import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin.routing';
import {AuthModule} from '../auth/auth.module';
import {HeaderComponent} from './header/header.component';
import {AdminComponent} from './admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
		AuthModule,
		NgbModule
  ],
  declarations: [HeaderComponent, AdminComponent],
  providers: []
})
export class AdminModule {
}
