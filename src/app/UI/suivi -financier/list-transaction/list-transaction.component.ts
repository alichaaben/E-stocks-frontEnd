import { Component } from '@angular/core';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrl: './list-transaction.component.css'
})
export class ListTransactionComponent {
  Math = Math;

  transactions = [
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
    {
      date: '10/01/2024',
      type: 'MegaTech SARL',
      categorie: 'Informatique',
      montant: '18500',
    },
  ];

  
  p: number = 1; // Current page
  itemsPerPage: number = 5; // Items per page
  pageSizes: number[] = [5, 10, 20]; // Page size options

changePageSize(size: number): void {
  this.itemsPerPage = size;
  this.p = 1; // Reset to first page
}

getPages(): number[] {
  const totalPages = this.totalPages;
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}

get totalPages(): number {
  return Math.ceil(this.transactions.length / this.itemsPerPage);
}

}
