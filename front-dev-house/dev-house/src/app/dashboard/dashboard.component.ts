import { Component } from '@angular/core';
import { DashboardService } from './service/dashboard.service';
import { House } from '../types/house';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  houses: House[] = [];
  form = new FormData();
  selectedFile: any = null;

  formIncludeHouse = this.formBuilder.group({
    description: [],
    price: [],
    location: [],
    status: [],
    thumbnail: []
  })

  constructor(
    private service: DashboardService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.service.dashBoard().subscribe({
      next: dash => {
        console.log(dash)
        this.houses = dash;
      }
    })
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile)
  }

  addHouse(){
    const formData = new FormData();
    formData.append('thumbnail', this.selectedFile);
    formData.append('description', this.formIncludeHouse.get('description')?.value??'')
    formData.append('price', this.formIncludeHouse.get('price')?.value??'')
    formData.append('location', this.formIncludeHouse.get('location')?.value??'')
    formData.append('status', 'true')
    this.service.addHouse(formData).subscribe({
      next: newHouse => {
        console.log('RES',newHouse);
        this.houses.push(newHouse)
      }
    })
  }
}
