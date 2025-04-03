import { Component } from '@angular/core';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrl: './list-role.component.css'
})
export class ListRoleComponent {
  Math = Math;

  stats = [
    { title: 'Employees', value: '54', icon: 'solar:users-group-two-rounded-bold-duotone', color: '#4B49AC' },
    { title: 'Assigned Manager', value: '13', icon: 'solar:backpack-bold-duotone', color: '#98BDFF' },
    { title: 'Project', value: '19', icon: 'solar:rocket-2-bold-duotone', color: '#7978E9' },
    { title: 'License Used', value: '36/50', icon: 'solar:notebook-bold-duotone', color: '#184270' },
  ];

    // Liste des utilisateurs (exemple)
    users = [
      { image: 'assets/Ali2.png', name: 'userName1', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName2', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName3', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName4', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName5', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName6', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName7', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName8', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName9', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName10', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName11', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName12', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName13', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName14', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName15', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName16', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName17', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName18', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName19', email: 'email1@example.com', role: 'roleName1', phone: '1234567890' },
      { image: 'assets/Ali2.png', name: 'userName20', email: 'email2@example.com', role: 'roleName2', phone: '1234567890' },
    ];
  
  // Pagination
  p: number = 1; // Page actuelle
  itemsPerPage: number = 5; // Nombre d'éléments par page
  pageSizes: number[] = [5, 10, 20]; // Options pour le nombre d'éléments par page

  // Méthode pour changer le nombre d'éléments par page
  changePageSize(size: number): void {
    this.itemsPerPage = size;
    this.p = 1; // Revenir à la première page
  }

  // Méthode pour obtenir les pages disponibles
  getPages(): number[] {
    const totalPages = Math.ceil(this.users.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }
  

}
