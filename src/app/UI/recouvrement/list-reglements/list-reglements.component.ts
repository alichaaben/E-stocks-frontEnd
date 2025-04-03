import { Component } from '@angular/core';

@Component({
  selector: 'app-list-reglements',
  templateUrl: './list-reglements.component.html',
  styleUrl: './list-reglements.component.css'
})
export class ListReglementsComponent {

  Math = Math;


  reglements = [
    {
      numFact: 'FAC-2024-001',
      client: 'SARL TechnoPlus',
      date: '15/02/2024',
      ref: 'REG-001',
      MontEnCaiss: '10000',
      MontPay: '10000',
      mode: 'Virement',
      statut: 'Réglé'
    },
    {
      numFact: 'FAC-2024-002',
      client: 'EURL ServicePro',
      date: '20/01/2024',
      ref: 'REG-002',
      MontEnCaiss: '8500',
      MontPay: '8500',
      mode: 'Chèque',
      statut: 'Réglé'
    },
    {
      numFact: 'FAC-2024-005',
      client: 'Groupe IndustrielXYZ',
      date: '10/04/2024',
      ref: 'REG-003',
      MontEnCaiss: '20000',
      MontPay: '20000',
      mode: 'Virement',
      statut: 'Réglé'
    },
    {
      numFact: 'FAC-2024-008',
      client: 'Société BuildConstr',
      date: '05/05/2024',
      ref: 'REG-004',
      MontEnCaiss: '15000',
      MontPay: '15000',
      mode: 'Traite',
      statut: 'En attente'
    },
    {
      numFact: 'FAC-2024-003',
      client: 'SA DistributionMag',
      date: '05/04/2024',
      ref: 'REG-005',
      MontEnCaiss: '0',
      MontPay: '0',
      mode: '-',
      statut: 'Impayé'
    },
    {
      numFact: 'FAC-2024-004',
      client: 'AutoEntreprise DevWeb',
      date: '12/03/2024',
      ref: 'REG-006',
      MontEnCaiss: '6200',
      MontPay: '6200',
      mode: 'Espèces',
      statut: 'Réglé'
    },
    {
      numFact: 'FAC-2024-006',
      client: 'SARL ElectroMarket',
      date: '10/04/2024',
      ref: 'REG-007',
      MontEnCaiss: '0',
      MontPay: '0',
      mode: '-',
      statut: 'En attente'
    },
    {
      numFact: 'FAC-2024-007',
      client: 'Entreprise LogiSoft',
      date: '22/05/2024',
      ref: 'REG-008',
      MontEnCaiss: '15300',
      MontPay: '15300',
      mode: 'Virement',
      statut: 'Réglé'
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
    return Math.ceil(this.reglements.length / this.itemsPerPage);
  }

}
