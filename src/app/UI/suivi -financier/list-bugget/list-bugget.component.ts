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
  selector: 'app-list-bugget',
  templateUrl: './list-bugget.component.html',
  styleUrl: './list-bugget.component.css'
})
export class ListBuggetComponent {
  Math = Math;

  tabs: Tab[] = [
    { id: 'tab1', label: 'Revenu', active: true },
    { id: 'tab2', label: 'Dépense', active: false },
    { id: 'tab3', label: 'Facture', active: false },
    { id: 'tab4', label: 'Crédit', active: false },
    { id: 'tab5', label: 'Epargne', active: false }
  ];


  tables: { [key: string]: TableData } = {
    tab1: {
      headers: ['Revenu', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Total'],
      rows: [
        { cols: ['Brand', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Style/Wash/Cut', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Fabric', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Tag Size', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] }
      ]
    },
    tab2: {
      headers: ['Dépense', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Total'],
      rows: [
        { cols: ['Brand', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Style/Wash/Cut', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Fabric', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Tag Size', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] }
      ]
    },
    tab3: {
      headers: ['Facture', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Total'],
      rows: [
        { cols: ['Brand', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Style/Wash/Cut', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Fabric', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Tag Size', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] }
      ]
    },
    tab4: {
      headers: ['Crédit', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Total'],
      rows: [
        { cols: ['Brand', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Style/Wash/Cut', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Fabric', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Tag Size', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] }
      ]
    },
    tab5: {
      headers: ['Epargne', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Total'],
      rows: [
        { cols: ['Brand', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Style/Wash/Cut', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Fabric', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Condition', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] },
        { cols: ['Tag Size', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','1234'] }
      ]
    }
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
