import { Component } from '@angular/core';

@Component({
  selector: 'app-list-reglement-dette',
  templateUrl: './list-reglement-dette.component.html',
  styleUrl: './list-reglement-dette.component.css'
})
export class ListReglementDetteComponent {
  Math = Math;

  DetteReglements = [
    {
      numFact: 'FAC-FOUR-001',
      fournisseur: 'MegaTech SARL',
      date: '05/02/2024',
      ref: 'REG-FOUR-001',
      montPay: '18500',
      modePay: 'Virement',
      numCheque: '',
      banque: 'BMCE'
    },
    {
      numFact: 'FAC-FOUR-002',
      fournisseur: 'OfficeSupply',
      date: '20/02/2024',
      ref: 'REG-FOUR-002',
      montPay: '5000',
      modePay: 'Chèque',
      numCheque: 'CH654321',
      banque: 'CIH'
    },
    {
      numFact: 'FAC-FOUR-004',
      fournisseur: 'LogiMatériaux',
      date: '01/03/2024',
      ref: 'REG-FOUR-003',
      montPay: '15600',
      modePay: 'Traite',
      numCheque: 'TR2024001',
      banque: 'SGMB'
    },
    {
      numFact: 'FAC-FOUR-005',
      fournisseur: 'CleanProd',
      date: '18/02/2024',
      ref: 'REG-FOUR-004',
      montPay: '4200',
      modePay: 'Espèces',
      numCheque: '',
      banque: ''
    },
    {
      numFact: 'FAC-FOUR-007',
      fournisseur: 'TelecomPro',
      date: '10/04/2024',
      ref: 'REG-FOUR-005',
      montPay: '10000',
      modePay: 'Virement',
      numCheque: '',
      banque: 'BP'
    },
    {
      numFact: 'FAC-FOUR-008',
      fournisseur: 'AutoPiece',
      date: '20/04/2024',
      ref: 'REG-FOUR-006',
      montPay: '7600',
      modePay: 'Chèque',
      numCheque: 'CH987654',
      banque: 'Attijari'
    },
    {
      numFact: 'FAC-FOUR-002',
      fournisseur: 'OfficeSupply',
      date: '15/03/2024',
      ref: 'REG-FOUR-007',
      montPay: '3700',
      modePay: 'Virement',
      numCheque: '',
      banque: 'BMCI'
    },
    {
      numFact: 'FAC-FOUR-007',
      fournisseur: 'TelecomPro',
      date: '25/04/2024',
      ref: 'REG-FOUR-008',
      montPay: '5300',
      modePay: 'Chèque',
      numCheque: 'CH123456',
      banque: 'CDG'
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
    return Math.ceil(this.DetteReglements.length / this.itemsPerPage);
  }


}
