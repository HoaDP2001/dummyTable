import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../service/getProducts.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  expandSet = new Set<number>();

  onExpandChange(id: number, checked: boolean) {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  productsList: Product[] = [];

  constructor(private productsService: GetProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((data: any) => (this.productsList = data['products']));
  }
}
