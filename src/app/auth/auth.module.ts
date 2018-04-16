import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LogoutComponent} from './logout/logout.component';
import {AuthRoutingModule} from './auth.routing';
import {LoggedInGuard} from './logged-in.guard';
import {MockBackendModule} from '../mock-backend/mock-backend.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { TableComponent } from './login/table/table.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
		CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpModule,
		MockBackendModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
  ],
  declarations: [LoginComponent, LogoutComponent, TableComponent, FormComponent],
  providers: [
    AuthService,
    LoggedInGuard,
    {provide: 'AUTH_TOKEN', useValue: 'token'},
    {provide: 'AUTH_USER', useValue: 'user'}
  ],
  exports: [LogoutComponent]
})
export class AuthModule {
}
