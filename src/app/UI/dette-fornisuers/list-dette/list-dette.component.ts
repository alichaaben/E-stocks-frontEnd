import { Component } from '@angular/core';

@Component({
  selector: 'app-list-dette',
  templateUrl: './list-dette.component.html',
  styleUrl: './list-dette.component.css'
})
export class ListDetteComponent {
  Math = Math;

  dettes = [
    {
      numFact: 'FAC-FOUR-001',
      dateFact: '10/01/2024',
      fournisseur: 'MegaTech SARL',
      categorie: 'Informatique',
      Dregle: '30 jours',
      MontAPay: '18500',
      MontPayee: '18500',
      solde: '0',
      echeance: '10/02/2024',
      retard: '0 jour',
      statut: 'Réglée'
    },
    {
      numFact: 'FAC-FOUR-002',
      dateFact: '15/01/2024',
      fournisseur: 'OfficeSupply',
      categorie: 'Bureau',
      Dregle: '45 jours',
      MontAPay: '8700',
      MontPayee: '5000',
      solde: '3700',
      echeance: '01/03/2024',
      retard: '12 jours',
      statut: 'En retard'
    },
    {
      numFact: 'FAC-FOUR-003',
      dateFact: '22/01/2024',
      fournisseur: 'ElectroParts',
      categorie: 'Composants',
      Dregle: '60 jours',
      MontAPay: '32400',
      MontPayee: '0',
      solde: '32400',
      echeance: '22/03/2024',
      retard: 'En cours',
      statut: 'À échoir'
    },
    {
      numFact: 'FAC-FOUR-004',
      dateFact: '05/02/2024',
      fournisseur: 'LogiMatériaux',
      categorie: 'BTP',
      Dregle: '30 jours',
      MontAPay: '15600',
      MontPayee: '15600',
      solde: '0',
      echeance: '05/03/2024',
      retard: '0 jour',
      statut: 'Réglée'
    },
    {
      numFact: 'FAC-FOUR-005',
      dateFact: '18/02/2024',
      fournisseur: 'CleanProd',
      categorie: 'Entretien',
      Dregle: 'Comptant',
      MontAPay: '4200',
      MontPayee: '4200',
      solde: '0',
      echeance: '18/02/2024',
      retard: '0 jour',
      statut: 'Réglée'
    },
    {
      numFact: 'FAC-FOUR-006',
      dateFact: '01/03/2024',
      fournisseur: 'FoodService',
      categorie: 'Restauration',
      Dregle: '15 jours',
      MontAPay: '9800',
      MontPayee: '0',
      solde: '9800',
      echeance: '16/03/2024',
      retard: '25 jours',
      statut: 'En retard'
    },
    {
      numFact: 'FAC-FOUR-007',
      dateFact: '12/03/2024',
      fournisseur: 'TelecomPro',
      categorie: 'Téléphonie',
      Dregle: '30 jours',
      MontAPay: '15300',
      MontPayee: '10000',
      solde: '5300',
      echeance: '12/04/2024',
      retard: '5 jours',
      statut: 'En retard'
    },
    {
      numFact: 'FAC-FOUR-008',
      dateFact: '25/03/2024',
      fournisseur: 'AutoPiece',
      categorie: 'Automobile',
      Dregle: '30 jours',
      MontAPay: '7600',
      MontPayee: '7600',
      solde: '0',
      echeance: '25/04/2024',
      retard: '0 jour',
      statut: 'Réglée'
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
  return Math.ceil(this.dettes.length / this.itemsPerPage);
}

}
