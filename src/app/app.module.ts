import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, RouterOutlet, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestModule } from './pages/PnW/pnw.module';

registerLocaleData(en);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/PnW/pnw-routing.module').then((m) => m.TestRoutingModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterOutlet,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TestModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
