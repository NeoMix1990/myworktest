import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {AdminModule} from './admin/admin.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		AdminModule,
		AuthModule,
		NgbModule.forRoot()
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
