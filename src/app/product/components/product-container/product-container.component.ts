import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from './../../service';
import { Observable } from 'rxjs';
import { ProductVariant } from './../../domain/index';
import { filter, map, switchMap } from 'rxjs/operators';
import { DialogService } from './../../../dialog/services';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {

  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private service: OrderService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );
    this.variants$ = productId$.pipe(
      switchMap(productId =>
        this.service.getProductVariantsByProductId(productId)
      )
    );
  }

  handleDirectBuy(variants: ProductVariant[]) {}

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;
    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {},
      outputs: {},
      position: {
        top: `${top}%`,
        left: '0',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }
}
