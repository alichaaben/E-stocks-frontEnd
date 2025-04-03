import { Component } from '@angular/core';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrl: './list-inventory.component.css'
})
export class ListInventoryComponent {
  Math = Math;


  // Liste des utilisateurs (exemple)
  invent = [
    {
      Reference: 'REF-2024-001',
      Designation: 'Ordinateur Portable HP EliteBook',
      Unite: 'Unité',
      Categorie: 'Informatique',
      alerte: '5',
      StockInitial: '15',
      Entrees: '10',
      Sorties: '8',
      StockFinal: '17',
      cump: '8500',
      Valeur: '144500',
      Statut: 'Normal'
    },
    {
      Reference: 'REF-2024-002',
      Designation: 'Imprimante Laser Canon',
      Unite: 'Unité',
      Categorie: 'Bureau',
      alerte: '3',
      StockInitial: '8',
      Entrees: '5',
      Sorties: '4',
      StockFinal: '9',
      cump: '1200',
      Valeur: '10800',
      Statut: 'Faible'
    },
    {
      Reference: 'REF-2024-003',
      Designation: 'Câble HDMI 2m',
      Unite: 'Pièce',
      Categorie: 'Accessoires',
      alerte: '20',
      StockInitial: '50',
      Entrees: '30',
      Sorties: '25',
      StockFinal: '55',
      cump: '45',
      Valeur: '2475',
      Statut: 'Normal'
    },
    {
      Reference: 'REF-2024-004',
      Designation: 'Clavier Sans Fil Logitech',
      Unite: 'Unité',
      Categorie: 'Périphérique',
      alerte: '10',
      StockInitial: '25',
      Entrees: '15',
      Sorties: '12',
      StockFinal: '28',
      cump: '180',
      Valeur: '5040',
      Statut: 'Fini'
    },
    {
      Reference: 'REF-2024-005',
      Designation: 'Disque Dur Externe 1To',
      Unite: 'Unité',
      Categorie: 'Stockage',
      alerte: '7',
      StockInitial: '12',
      Entrees: '8',
      Sorties: '5',
      StockFinal: '15',
      cump: '350',
      Valeur: '5250',
      Statut: 'Normal'
    },
    {
      Reference: 'REF-2024-006',
      Designation: 'Souris Ergonomique',
      Unite: 'Unité',
      Categorie: 'Périphérique',
      alerte: '15',
      StockInitial: '30',
      Entrees: '20',
      Sorties: '18',
      StockFinal: '32',
      cump: '75',
      Valeur: '2400',
      Statut: 'Normal'
    },
    {
      Reference: 'REF-2024-007',
      Designation: 'Écran 24" Full HD',
      Unite: 'Unité',
      Categorie: 'Affichage',
      alerte: '4',
      StockInitial: '6',
      Entrees: '4',
      Sorties: '3',
      StockFinal: '7',
      cump: '900',
      Valeur: '6300',
      Statut: 'Normal'
    },
    {
      Reference: 'REF-2024-008',
      Designation: 'Casque Audio Professionnel',
      Unite: 'Unité',
      Categorie: 'Audio',
      alerte: '6',
      StockInitial: '10',
      Entrees: '5',
      Sorties: '4',
      StockFinal: '11',
      cump: '250',
      Valeur: '2750',
      Statut: 'Normal'
    },
    {
      Reference: 'REF-2024-009',
      Designation: 'Clé USB 64Go',
      Unite: 'Unité',
      Categorie: 'Stockage',
      alerte: '25',
      StockInitial: '60',
      Entrees: '40',
      Sorties: '35',
      StockFinal: '65',
      cump: '40',
      Valeur: '2600',
      Statut: 'Normal'
    }
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
  return Math.ceil(this.invent.length / this.itemsPerPage);
}


}
