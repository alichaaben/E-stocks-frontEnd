import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-ro-system',
  templateUrl: './ro-system.component.html',
  styleUrl: './ro-system.component.css'
})
export class RoSystemComponent {
  isRunning = false;
  showConfirmation = false;

  // Toggle the confirmation modal
  handlePowerToggle(): void {
    this.showConfirmation = true;
  }

  // Confirm the power change
  confirmPowerChange(): void {
    this.isRunning = !this.isRunning;
    this.showConfirmation = false;
  }

  // Close the confirmation modal
  closeConfirmation(): void {
    this.showConfirmation = false;
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString();
  }

}