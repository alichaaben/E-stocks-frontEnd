import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { UserMdl } from '../model/User.model';
import { Router } from '@angular/router';
//import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrl: './create-categories.component.css'
})
export class CreateCategoriesComponent {
CategorieForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    //private usersService: UsersService
  ) {
    this.CategorieForm = this.fb.group({
      Ref: ['', [Validators.required]],
      Desg: ['', [Validators.required]],
      Rayonnage: ['', [Validators.required]],
    });
  }


  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }



  onSubmit(): void {
    if (this.CategorieForm.invalid) {
      alert('Veuillez remplir tous les champs correctement.');
      return;
    }

  }

}
