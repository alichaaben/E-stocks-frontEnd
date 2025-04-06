import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  rotation = 0;
  private intervalId: any;


  // Updated buttons with navigation paths
  buttons = [
    {
      icon: 'assets/stock.png',
      label: 'Stocks',
      color: 'bg-blue-500/90',
      radius: 200,
      angleOffset: 0,
      size: 'w-20 h-20',
      path: '/admin/dashboard'
    },
    {
      icon: 'assets/facture-dachat.png',
      label: 'Facturations',
      color: 'bg-cyan-500/90',
      radius: 200,
      angleOffset: 144,
      size: 'w-20 h-20',
      path: '/admin/dashboard'
    },
    {
      icon: 'assets/fournisseur.png',
      label: 'Fournisseurs',
      color: 'bg-red-500/90',
      radius: 300,
      angleOffset: 72,
      size: 'w-24 h-24',
      path: '/admin/dashboard'
    },
    {
      icon: 'assets/porte-monnaie.png',
      label: 'Suivi financier',
      color: 'bg-orange-400/90',
      radius: 300,
      angleOffset: 216,
      size: 'w-24 h-24',
      path: '/admin/dashboard'
    },
    {
      icon: 'assets/la-dette-a-long-terme.png ',
      label: 'Recouvrement crédit',
      color: 'bg-indigo-600/90',
      radius: 300,
      angleOffset: 288,
      size: 'w-24 h-24',
      path: '/admin/dashboard'
    }
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.rotation = (this.rotation + 0.2) % 360;
    }, 50);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getIconClass(icon: string) {
    return {
      'package': 'lucide lucide-package',
      'file-text': 'lucide lucide-file-text',
      'dollar-sign': 'lucide lucide-dollar-sign',
      'truck': 'lucide lucide-truck',
      'trending-up': 'lucide lucide-trending-up',
      'log-out': 'lucide lucide-log-out',
      'bar-chart-2': 'lucide lucide-bar-chart-2'
    }[icon] || '';
  }

  calculatePosition(radius: number, angleOffset: number) {
    const angle = this.rotation + angleOffset;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  }

}