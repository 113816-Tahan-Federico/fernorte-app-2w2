import { Component } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProductComponent } from '../edit-product/edit-product.component';


@Component({
  selector: 'fn-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  listProducts: IProduct[] = [];
  private subscription = new Subscription();

  currentPage = 1;
  itemsPerPage = 10;

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit() {
    this.pagedProducts();
  }

  openEditModal(product: IProduct) {
    const modalRef = this.modalService.open(EditProductComponent, { size: 'lg' });
    modalRef.componentInstance.product = product;
  }

  private pagedProducts() {
      this.subscription.add(
        this.productService.get().subscribe({
          next: (products: IProduct[]) => {
            this.listProducts = products;
          },
          error: () => {
            alert('error en la API')
          }
        }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
