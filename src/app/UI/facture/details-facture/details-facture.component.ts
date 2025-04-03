import { Component } from '@angular/core';

@Component({
  selector: 'app-details-facture',
  templateUrl: './details-facture.component.html',
  styleUrl: './details-facture.component.css'
})
export class DetailsFactureComponent {
  invoiceData = {
    invoiceNumber: '#INV-0758267/90',
    issueDate: '23 April 2024',
    dueDate: '26 April 2024',
    total: 737.00,
    sender: {
      name: 'Larkon Admin.INC',
      address: '2437 Romano Street, Cambridge, MA 02141',
      phone: '(317) 817-417-2004',
      email: 'JulianeKuhn@jourrapide.com'
    },
    receiver: {
      name: 'Gaston Lapierre',
      address: '1344 Hershell Hollow Road, WA 98168, USA',
      phone: '(123) 732-760-5760',
      email: 'hello@dundermufflin.com'
    },
    items: [
      { name: 'Men Black Slim Fit T-shirt', size: 'M', quantity: 1, price: 80, tax: 3, total: 83, image: 'tshirt.png' },
      { name: 'Dark Green Cargo Pant', size: 'M', quantity: 3, price: 110, tax: 4, total: 330, image: 'pants.png' },
      { name: 'Men Dark Brown Wallet', size: 'S', quantity: 1, price: 132, tax: 5, total: 137, image: 'wallet.png' },
      { name: 'Kid’s Yellow T-shirt', size: 'S', quantity: 2, price: 110, tax: 5, total: 223, image: 'kids-tshirt.png' }
    ]
  };
  
  // Example data for the invoice
  invoice = {
    invoiceNumber: '#INV-07582677/90',
    issueDate: '23 April 2024',
    dueDate: '26 April 2024',
    amount: '$737.00',
    status: 'Paid',
  };

  // Example data for the products
  products = [
    {
      image: 'assets/Ali2.png',
      name: 'Men Black Slim Fit T-shirt',
      size: 'M',
      quantity: 1,
      price: '$80.00',
      tax: '$3.00',
      total: '$83.00',
    },
    {
      image: 'assets/Ali2.png',
      name: 'Dark Green Cargo Pant',
      size: 'M',
      quantity: 3,
      price: '$110.00',
      tax: '$4.00',
      total: '$330.00',
    },
    {
      image: 'assets/Ali2.png',
      name: 'Men Dark Brown Wallet',
      size: 'S',
      quantity: 1,
      price: '$132.00',
      tax: '$5.00',
      total: '$137.00',
    },
    {
      image: 'assets/Ali2.png',
      name: "Kid's Yellow T-shirt",
      size: 'S',
      quantity: 2,
      price: '$110.00',
      tax: '$5.00',
      total: '$223.00',
    },
  ];

  // Example data for totals
  totals = {
    subtotal: '$777.00',
    discount: '-$60.00',
    tax: '$20.00',
    grandTotal: '$737.00',
  };


}