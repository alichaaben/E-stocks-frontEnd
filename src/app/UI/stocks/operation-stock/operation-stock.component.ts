import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { UserMdl } from '../model/User.model';
import { Router } from '@angular/router';
//import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-operation-stock',
  templateUrl: './operation-stock.component.html',
  styleUrl: './operation-stock.component.css'
})
export class OperationStockComponent {
    marchandiseForm: FormGroup;
    selectedFile: File | null = null;
  
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
        PrixUni: ['', Validators.required],
        Qte: ['', Validators.required],
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
  
      // const newUser: UserMdl = {
      //   id: '',
      //   userName: this.employeForm.value.fullName,
      //   email: this.employeForm.value.email,
      //   telephone: this.employeForm.value.phone,
      //   motDePasse: this.employeForm.value.password,
      //   roleName: this.employeForm.value.role,
      //   profileImage: null,
      // };
      
      // const profileImage = this.selectedFile || null;
  
      // this.usersService.addUser(newUser,profileImage).subscribe({
      //   next: () => {
      //     this.employeForm.reset();
      //     this.router.navigateByUrl('Admin/GestionEmp/listeEmp');
      //   },
      //   error: (err) => {
      //     console.error("Erreur lors de l'ajout de l'utilisateur :", err);
      //   },
      // });
    }
  

}
