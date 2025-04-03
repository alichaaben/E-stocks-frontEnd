import { Component } from '@angular/core';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrl: './list-stock.component.css'
})
export class ListStockComponent {
  Math = Math;


    // Liste des utilisateurs (exemple)
    stocks = [
      { Ref: 'ref001', Designation: 'Téléphone portable', Unite: 'Pièce', Categorie: 'Électronique', alerte: '5', StockInitial: '50', PrixUnitaire: '300', Total: '15000', image: 'assets/Ali2.png' },
      { Ref: 'ref002', Designation: 'Ordinateur portable', Unite: 'Pièce', Categorie: 'Informatique', alerte: '3', StockInitial: '25', PrixUnitaire: '1200', Total: '30000', image: 'assets/Ali2.png' },
      { Ref: 'ref003', Designation: 'Souris sans fil', Unite: 'Pièce', Categorie: 'Accessoires', alerte: '10', StockInitial: '100', PrixUnitaire: '25', Total: '2500', image: 'assets/Ali2.png' },
      { Ref: 'ref004', Designation: 'Clavier mécanique', Unite: 'Pièce', Categorie: 'Accessoires', alerte: '8', StockInitial: '40', PrixUnitaire: '80', Total: '3200', image: 'assets/Ali2.png' },
      { Ref: 'ref005', Designation: 'Écran 24 pouces', Unite: 'Pièce', Categorie: 'Informatique', alerte: '4', StockInitial: '30', PrixUnitaire: '180', Total: '5400', image: 'assets/Ali2.png' },
      { Ref: 'ref006', Designation: 'Disque SSD 500Go', Unite: 'Pièce', Categorie: 'Stockage', alerte: '6', StockInitial: '60', PrixUnitaire: '70', Total: '4200', image: 'assets/Ali2.png' },
      { Ref: 'ref007', Designation: 'Casque Bluetooth', Unite: 'Pièce', Categorie: 'Audio', alerte: '7', StockInitial: '45', PrixUnitaire: '90', Total: '4050', image: 'assets/Ali2.png' },
      { Ref: 'ref008', Designation: 'Batterie externe 10000mAh', Unite: 'Pièce', Categorie: 'Accessoires', alerte: '12', StockInitial: '80', PrixUnitaire: '30', Total: '2400', image: 'assets/Ali2.png' },
      { Ref: 'ref009', Designation: 'Câble HDMI 2m', Unite: 'Pièce', Categorie: 'Câbles', alerte: '15', StockInitial: '120', PrixUnitaire: '10', Total: '1200', image: 'assets/Ali2.png' },
      { Ref: 'ref010', Designation: 'Adaptateur USB-C', Unite: 'Pièce', Categorie: 'Accessoires', alerte: '20', StockInitial: '150', PrixUnitaire: '15', Total: '2250', image: 'assets/Ali2.png' },
      { Ref: 'ref011', Designation: 'Imprimante laser', Unite: 'Pièce', Categorie: 'Bureau', alerte: '2', StockInitial: '15', PrixUnitaire: '250', Total: '3750', image: 'assets/Ali2.png' },
      { Ref: 'ref012', Designation: 'Cartouche encre noire', Unite: 'Pièce', Categorie: 'Consommables', alerte: '25', StockInitial: '200', PrixUnitaire: '35', Total: '7000', image: 'assets/Ali2.png' },
      { Ref: 'ref013', Designation: 'Classeur A4', Unite: 'Pièce', Categorie: 'Fournitures', alerte: '30', StockInitial: '300', PrixUnitaire: '5', Total: '1500', image: 'assets/Ali2.png' },
      { Ref: 'ref014', Designation: 'Stylo bille', Unite: 'Lot (10)', Categorie: 'Fournitures', alerte: '50', StockInitial: '500', PrixUnitaire: '8', Total: '4000', image: 'assets/Ali2.png' },
      { Ref: 'ref015', Designation: 'Cahier 100 pages', Unite: 'Pièce', Categorie: 'Fournitures', alerte: '40', StockInitial: '400', PrixUnitaire: '3', Total: '1200', image: 'assets/Ali2.png' },
      { Ref: 'ref016', Designation: 'Lampe de bureau LED', Unite: 'Pièce', Categorie: 'Bureau', alerte: '5', StockInitial: '35', PrixUnitaire: '40', Total: '1400', image: 'assets/Ali2.png' },
      { Ref: 'ref017', Designation: 'Tapis de souris', Unite: 'Pièce', Categorie: 'Accessoires', alerte: '20', StockInitial: '200', PrixUnitaire: '7', Total: '1400', image: 'assets/Ali2.png' },
      { Ref: 'ref018', Designation: 'Webcam HD', Unite: 'Pièce', Categorie: 'Périphériques', alerte: '8', StockInitial: '50', PrixUnitaire: '60', Total: '3000', image: 'assets/Ali2.png' },
      { Ref: 'ref019', Designation: 'Microphone USB', Unite: 'Pièce', Categorie: 'Audio', alerte: '6', StockInitial: '30', PrixUnitaire: '75', Total: '2250', image: 'assets/Ali2.png' },
      { Ref: 'ref020', Designation: 'Support laptop', Unite: 'Pièce', Categorie: 'Accessoires', alerte: '10', StockInitial: '70', PrixUnitaire: '20', Total: '1400', image: 'assets/Ali2.png' }
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
    return Math.ceil(this.stocks.length / this.itemsPerPage);
  }
  
}

