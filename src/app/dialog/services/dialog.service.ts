import { Injectable, Inject, Type } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomService, ChildConfig } from './dom.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialogElementId = 'dialog-container';
  private overlayElementId = 'overlay';
  private data$ = new BehaviorSubject<object | null>(null);

  constructor(
    private domService: DomService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(component: Type<any>, childConfig: ChildConfig) {
    this.domService.appendComponentTo(
      this.dialogElementId,
      component,
      childConfig
    )
    if (childConfig.position) {
      const element = this.document.getElementById(this.dialogElementId);
      element.style.width = childConfig.position.width;
      element.style.height = childConfig.position.height;
      element.style.top = childConfig.position.top;
      element.style.left = childConfig.position.left;
    }
    this.toggleAll();
    this.data$.next(null);
  }

  close() {
    this.domService.removeComponent();
    this.toggleAll();
  }

  private toggleAll() {
    this.toggleVisibility(this.document.getElementById(this.dialogElementId));
    this.toggleVisibility(this.document.getElementById(this.overlayElementId));
  }

  getData() {
    return this.data$.asObservable();
  }

  saveData(data: object | null) {
    this.data$.next(data);
  }

  private toggleVisibility(element: HTMLElement) {
    if (element.classList.contains('show')) {
      element.classList.remove('show');
      element.classList.add('hidden');
      return;
    }
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('show');
    }
  }
}
