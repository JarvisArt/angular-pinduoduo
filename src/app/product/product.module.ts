import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  ProductContainerComponent,
  GroupItemComponent,
  GroupShortListComponent,
} from './components';
import { ProductVariantDialogComponent } from './components/product-variant-dialog/product-variant-dialog.component';

@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  entryComponents: [
    ProductVariantDialogComponent
  ]
})
export class ProductModule { }
