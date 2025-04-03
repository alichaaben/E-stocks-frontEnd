import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { UserMdl } from '../model/User.model';
import { Router } from '@angular/router';
//import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrl: './update-stock.component.css'
})
export class UpdateStockComponent {
  marchandiseForm: FormGroup;
    selectedFile: File | null = null;
    previewImage: string | null = null;
  
    constructor(
      private fb: FormBuilder,
      private router: Router,
      //private usersService: UsersService
    ) {
      this.marchandiseForm = this.fb.group({
        Ref: ['', [Validators.required]],
        Desg: ['', [Validators.required]],
        unit: ['', [Validators.required]],
        Categorie: ['', Validators.required],
        alerte: ['', Validators.required],
        PrixUni: ['', Validators.required],
        stockUni: ['', Validators.required],
        total: ['', [Validators.required, Validators.minLength(6)]],
      });
    }
  
  
    onFileChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input?.files?.length) {
        this.selectedFile = input.files[0];
      }
    }
  
  
  
    onSubmit(): void {
      if (this.marchandiseForm.invalid) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
      }
    }






  // Handle image upload
  handleImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Clear preview image
  clearPreviewImage(): void {
    this.previewImage = null;
  }


}
