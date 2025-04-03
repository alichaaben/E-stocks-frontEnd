import { Component } from '@angular/core';
import { categories, months, inventoryData, currentCategoryData } from './data';

export interface InventoryCard {
  id: number;
  title: string;
  category: string;
  month: string;
  value: number;
  quantity: number;
  trend?: 'up' | 'down';
  percentage?: number;
}

@Component({
  selector: 'app-dashboard-stocks',
  templateUrl: './dashboard-stocks.component.html',
  styleUrls: ['./dashboard-stocks.component.css']
})
export class DashboardStocksComponent {
  // Filter options from data.ts
  categories = categories;
  months = months;

  // Selected filters
  selectedCategories: string[] = [];
  selectedMonth: string = '';

  // Combined inventory data
  cards: InventoryCard[] = [
    ...inventoryData,
    ...currentCategoryData
  ];

  // ... rest of the component remains the same ...
  toggleCategory(category: string): void {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
  }

  get filteredCards() {
    return this.cards.filter(card => {
      const categoryMatch = this.selectedCategories.length === 0 ||
        this.selectedCategories.includes(card.category) ||
        card.category === 'All';
      const monthMatch = !this.selectedMonth ||
        card.month === this.selectedMonth ||
        card.month === 'All' ||
        card.month === 'Current';
      return categoryMatch && monthMatch;
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  clearFilters(): void {
    this.selectedCategories = [];
    this.selectedMonth = '';
  }


}