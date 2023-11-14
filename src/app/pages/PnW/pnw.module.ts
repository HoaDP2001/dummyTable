import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './pnw-routing.module';
import { ProductsComponent } from './products/products.component';
import { WeatherComponent } from './weather/weather.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KelvinToCelsiusPipe } from 'src/app/pipe/kelvin-to-celsius.pipe';

@NgModule({
  declarations: [ProductsComponent, WeatherComponent, KelvinToCelsiusPipe],
  imports: [
    CommonModule,
    TestRoutingModule,
    NzTableModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
  ],
})
export class TestModule {}
