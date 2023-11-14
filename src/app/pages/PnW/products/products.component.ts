import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  expandSet: Set<number>;

  onExpandChange(id: number, checked: boolean) {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  productsList: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.expandSet = new Set<number>();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productsService
      .getProducts()
      .subscribe((data: any) => (this.productsList = data['products']));
  }
}
