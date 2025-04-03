import { Component } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  Math = Math;


  // Liste des utilisateurs (exemple)
  categories = [
    { Ref: 'ref001', Designation: 'Téléphone portable', rayonnage:'Block A'  },
    { Ref: 'ref002', Designation: 'Ordinateur portable', rayonnage:'Block A' },
    { Ref: 'ref003', Designation: 'Souris sans fil', rayonnage:'Block A'  },
    { Ref: 'ref004', Designation: 'Clavier mécanique', rayonnage:'Block A'},
    { Ref: 'ref005', Designation: 'Écran 24 pouces', rayonnage:'Block A' },
    { Ref: 'ref006', Designation: 'Disque SSD 500Go', rayonnage:'Block A' },
    { Ref: 'ref007', Designation: 'Casque Bluetooth', rayonnage:'Block A'  },
    { Ref: 'ref008', Designation: 'Batterie externe 10000mAh', rayonnage:'Block A' }
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
  return Math.ceil(this.categories.length / this.itemsPerPage);
}

}
