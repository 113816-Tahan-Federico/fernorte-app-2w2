import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { SaleOrderSearchHandlerComponent } from './components/sale-order-search-handler/sale-order-search-handler.component';
import { SaleOrderSearchFilterComponent } from './components/sale-order-search-filter/sale-order-search-filter.component';
import { SaleOrderSearchListComponent } from './components/sale-order-search-list/sale-order-search-list.component';

@NgModule({
  declarations: [HomeComponent, SaleOrderSearchHandlerComponent, SaleOrderSearchFilterComponent, SaleOrderSearchListComponent],
  providers: [],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent],
})
export class SalesModule {}
