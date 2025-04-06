import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrl: './achat.component.css'
})
export class AchatComponent{
  purchaseForm: FormGroup;
  products = [
    { name: 'Clou' },
    { name: 'Robinet' },
    { name: 'Lavabo' },
    { name: 'Tuyau PVC' },
    { name: 'Vis' }
  ];

  constructor(private fb: FormBuilder) {
    this.purchaseForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  get items(): FormArray {
    return this.purchaseForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      product: ['', Validators.required],
      purchasePrice: [0, [Validators.required, Validators.min(0)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      total: [{value: 0, disabled: true}]
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }


}