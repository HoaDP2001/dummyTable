import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: 'products-app',
    component: ProductsComponent,
  },
  {
    path: 'weather-app',
    component: WeatherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
