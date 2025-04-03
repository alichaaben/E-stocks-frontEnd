import { Component } from '@angular/core';

@Component({
  selector: 'app-list-creances',
  templateUrl: './list-creances.component.html',
  styleUrl: './list-creances.component.css'
})
export class ListCreancesComponent {
  Math = Math;


  // Liste des utilisateurs (exemple)
  creances = [
    {
      numFact: 'FAC-2024-001',
      date: '15/01/2024',
      client: 'SARL TechnoPlus',
      DRegle: '30 jours',
      MontFact: '12500',
      MontEnCaiss: '10000',
      Solde: '2500',
      echeance: '15/02/2024',
      retard: '15 jours',
      statut: 'En retard'
    },
    {
      numFact: 'FAC-2024-002',
      date: '20/01/2024',
      client: 'EURL ServicePro',
      DRegle: 'Comptant',
      MontFact: '8500',
      MontEnCaiss: '8500',
      Solde: '0',
      echeance: '20/01/2024',
      retard: '0 jour',
      statut: 'Réglée'
    },
    {
      numFact: 'FAC-2024-003',
      date: '05/02/2024',
      client: 'SA DistributionMag',
      DRegle: '60 jours',
      MontFact: '18400',
      MontEnCaiss: '0',
      Solde: '18400',
      echeance: '05/04/2024',
      retard: 'En cours',
      statut: 'En attente'
    },
    {
      numFact: 'FAC-2024-004',
      date: '12/02/2024',
      client: 'AutoEntreprise DevWeb',
      DRegle: '30 jours',
      MontFact: '6200',
      MontEnCaiss: '6200',
      Solde: '0',
      echeance: '12/03/2024',
      retard: '0 jour',
      statut: 'Réglée'
    },
    {
      numFact: 'FAC-2024-005',
      date: '28/02/2024',
      client: 'Groupe IndustrielXYZ',
      DRegle: '45 jours',
      MontFact: '35600',
      MontEnCaiss: '20000',
      Solde: '15600',
      echeance: '14/04/2024',
      retard: '5 jours',
      statut: 'En retard'
    },
    {
      numFact: 'FAC-2024-006',
      date: '10/03/2024',
      client: 'SARL ElectroMarket',
      DRegle: '30 jours',
      MontFact: '9200',
      MontEnCaiss: '0',
      Solde: '9200',
      echeance: '10/04/2024',
      retard: 'En cours',
      statut: 'À échoir'
    },
    {
      numFact: 'FAC-2024-007',
      date: '22/03/2024',
      client: 'Entreprise LogiSoft',
      DRegle: '60 jours',
      MontFact: '15300',
      MontEnCaiss: '15300',
      Solde: '0',
      echeance: '22/05/2024',
      retard: '0 jour',
      statut: 'Réglée'
    },
    {
      numFact: 'FAC-2024-008',
      date: '05/04/2024',
      client: 'Société BuildConstr',
      DRegle: '30 jours',
      MontFact: '28700',
      MontEnCaiss: '15000',
      Solde: '13700',
      echeance: '05/05/2024',
      retard: '2 jours',
      statut: 'En retard'
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
    return Math.ceil(this.creances.length / this.itemsPerPage);
  }


}
