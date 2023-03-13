import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../../service/product.service';
import {Product} from '../../../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = parseInt(data.get('id'), 10);
      if (id != null) {
        this.product = this.productService.findById(id);
        this.productForm.patchValue(this.product);
      }
    });
  }

  ngOnInit(): void {
  }

  update() {
    this.product = this.productForm.value;
    this.productService.edit(this.product);
    this.productForm.reset();
    this.router.navigateByUrl('/product/list');
  }
}
