import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { IProductCategory } from '../../models/IProductCategory';


@Component({
  selector: 'fn-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  isLoading = true;

  listProducts: IProductCategory[] = [];
  private subscription = new Subscription();

  currentPage = 1;
  itemsPerPage = 10;

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit() {
    this.pagedProducts();
  }

  openEditModal(product: IProductCategory) {
    const modalRef = this.modalService.open(EditProductComponent, { size: 'lg' });
    modalRef.componentInstance.product = product;
  }

  private pagedProducts() {
    this.isLoading = true; // Mostrar el spinner
  
    this.subscription.add(
      this.productService.get().subscribe({
        next: (products: IProductCategory[]) => {
          this.listProducts = products;
          this.isLoading = false; // Ocultar el spinner después de que los datos se carguen
        },
        error: () => {
          alert('Error en la API');
          this.isLoading = false; // Ocultar el spinner en caso de error
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
