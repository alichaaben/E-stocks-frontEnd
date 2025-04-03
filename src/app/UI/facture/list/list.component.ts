import { Component } from '@angular/core';

interface Tab {
  id: string;
  label: string;
  active: boolean;
}

interface TableData {
  headers: string[];
  rows: any[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  Math = Math;



  tabs: Tab[] = [
    { id: 'tab1', label: 'Devis', active: true },
    { id: 'tab2', label: 'Bon De Commande', active: false },
    { id: 'tab3', label: 'Bon De Livrision', active: false },
    { id: 'tab4', label: 'Facture', active: false }
  ];

  tables: { [key: string]: TableData } = {
    tab1: {
      headers: ['N° Devis', 'Date', 'Client', 'Montant TTC', 'Etat de paiement', 'Mode de paiement', 'documents', 'Actions'],
      rows: [
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
      ]
    },
    tab2: {
      headers: ['N° Commande', 'Date', 'Client', 'Montant TTC', 'Etat de paiement', 'Mode de paiement', 'documents', 'Actions'],
      rows: [
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
      ]
    },
    tab3: {
      headers: ['N° Livrision', 'Date', 'Client', 'Montant TTC', 'Etat de paiement', 'Mode de paiement', 'documents', 'Actions'],
      rows: [
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
      ]
    },
    tab4: {
      headers: ['N° Facture', 'Date', 'Client', 'Montant TTC', 'Etat de paiement', 'Mode de paiement', 'documents', 'Actions'],
      rows: [
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'payée', '5', '6'] },
        { cols: ['Brand', '1', '2', '3', 'impayée', '5', '6'] },
      ]
    },
  };

  // Pagination
  p: number = 1; // Current page
  itemsPerPage: number = 5; // Items per page
  pageSizes: number[] = [5, 10, 20]; // Page size options

  switchTab(selectedTab: Tab): void {
    this.tabs.forEach(tab => tab.active = false);
    selectedTab.active = true;
    this.p = 1; // Reset to first page when switching tabs
  }

  get activeTable(): TableData {
    const activeTab = this.tabs.find(tab => tab.active);
    return activeTab ? this.tables[activeTab.id] : this.tables['tab1'];
  }

  get paginatedRows(): any[] {
    const startIndex = (this.p - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.activeTable.rows.slice(startIndex, endIndex);
  }

  changePageSize(size: number): void {
    this.itemsPerPage = size;
    this.p = 1; // Reset to first page
  }

  getPages(): number[] {
    const totalPages = this.totalPages;
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get totalPages(): number {
    return Math.ceil(this.activeTable.rows.length / this.itemsPerPage);
  }
  
}