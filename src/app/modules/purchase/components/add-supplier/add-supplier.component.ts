import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ISupliers } from '../../models/ISuppliers';
import { SupliersService } from '../../services/supliers.service';
import { Subscription } from 'rxjs';
import { ListSuplierComponent } from '../list-suplier/list-suplier.component';

@Component({
  selector: 'fn-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css'],
})
export class AddSupplierComponent implements OnDestroy {
  @Output() closeAddSupplier = new EventEmitter<string>();
  @Output() refrescarService = new EventEmitter<string>();

  suplier: ISupliers = {} as ISupliers;
  supliers: ISupliers[] = [];

  constructor(private _serviceSuplier: SupliersService) {}
  
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  suscription = new Subscription();

  addSupplier() {
    this.suscription.add(
      this._serviceSuplier.addSuplier(this.suplier).subscribe({
        next: (data: ISupliers) => {
          this.refrescarService.emit();
          this.closeModal();
        },
        error: (error) => alert('error al cargar: ' + error),
      })
    );
  }

  closeModal() {
    this.closeAddSupplier.emit();
  }
}
