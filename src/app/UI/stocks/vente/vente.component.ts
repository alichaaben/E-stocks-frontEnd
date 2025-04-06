import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent {
  saleForm: FormGroup;
  products = [
    { name: 'Clou', price: 0.100 },
    { name: 'Robinet', price: 15.000 },
    { name: 'Lavabo', price: 45.000 },
    { name: 'Tuyau PVC', price: 5.000 },
    { name: 'Vis', price: 0.200 },
  ];

  constructor(private fb: FormBuilder) {
    this.saleForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  get items(): FormArray {
    return this.saleForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      product: ['', Validators.required],
      unitPrice: [{value: 0, disabled: true}, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      total: [{value: 0, disabled: true}, Validators.required]
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }
  removeItem(index: number): void {
    this.items.removeAt(index);
  }

}


