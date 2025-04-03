import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  tax: number;
  total: number;
}

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrl: './create-facture.component.css'
})
export class CreateFactureComponent {
  invoiceForm: FormGroup;
  selectedFile: File | null = null;
  selectedInvoiceType: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    //private usersService: UsersService
  ) {
    this.invoiceForm = this.fb.group({
      tyepF: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{8,12}$/)]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Watch for changes in the invoice type selection
    this.invoiceForm.get('tyepF')?.valueChanges.subscribe(value => {
      this.selectedInvoiceType = this.getInvoiceTypeLabel(value);
    });
  }

  // Helper method to get the display label for invoice type
  private getInvoiceTypeLabel(value: string): string {
    switch(value) {
      case 'devis': return 'Devis';
      case 'commande': return 'Bon de Commande';
      case 'livrision': return 'Bon de Livraison';
      case 'facture': return 'Facture';
      default: return '';
    }
  }

  onSubmit(): void {
    return ;
  }

  products: Product[] = [
    {
      id: 1,
      name: '',
      size: '',
      quantity: 1,
      price: 0,
      tax: 0,
      total: 0,
    },
  ];

  // Add a new product
  addProduct(): void {
    this.products.push({
      id: this.products.length + 1,
      name: '',
      size: '',
      quantity: 1,
      price: 0,
      tax: 0,
      total: 0,
    });
  }


  // Delete a specific product
  deleteProduct(index: number): void {
    if (this.products.length > 1) { // Keep at least one product
      this.products.splice(index, 1);
    }
  }


}