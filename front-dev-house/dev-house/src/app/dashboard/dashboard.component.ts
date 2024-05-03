import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DashboardService } from './service/dashboard.service';
import { House } from '../types/house';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


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
  selectedFileAdd: any = null;
  selectedFileEdit: any = null;
  srcPreviewAdd: string | ArrayBuffer ='';
  srcPreviewEdit: string | ArrayBuffer ='';
  @ViewChild('modalEdit') private modal?: ElementRef<HTMLDialogElement>;

  formIncludeHouse = this.formBuilder.group({
    description: [''],
    price: [''],
    location: [''],
    status: [''],
    thumbnail: ['']
  })

  formEditHouse = this.formBuilder.group({
    description: [''],
    price: [''],
    location: [''],
    status: [''],
    thumbnail: [''],
    id:['']
  });

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    console.log('enet',event.target.id);
    console.log(!this.elementRef.nativeElement.contains(event.target));
    if(event.target.id === 'dialog-edit') {
      this.closeModal();
    }
     if (!this.elementRef.nativeElement.contains(event.target)) {
        // clicked outside => close dropdown list
     this.closeModal();
     }
  }

  constructor(
    private service: DashboardService,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) { }


  ngOnInit() {
    this.service.dashBoard().subscribe({
      next: houses => {
        this.houses = houses;
      }
    })
    this.modalElement?.addEventListener('click', (event:any) => {
      console.log(event)
      if (event.target.id !== 'dialog-edit') {
        this.closeModal();
      }
  });
  }
  onFileSelectedAdd(event: any) {
    if(!event){
      return
    }
    this.selectedFileAdd = event.target.files[0] ?? null;
    const reader = new FileReader();
    reader.onloadend = ()=> {
      this.srcPreviewAdd = reader.result?? ''
    }
    reader.readAsDataURL(this.selectedFileAdd);
    return reader;
  }

  onFileSelectedEdit(event: any) {
    if(!event){
      return ;
    }
    this.selectedFileEdit = event.target.files[0] ?? null;
    const reader = new FileReader();
    reader.onloadend = ()=> {
      this.srcPreviewEdit = reader.result?? ''
    }
    reader.readAsDataURL(this.selectedFileEdit);
    return reader;
  }
  

  addHouse(): FormData  {
    const formData = this.getFormData(this.formIncludeHouse, this.selectedFileAdd)
    this.service.addHouse(formData).subscribe({
      next: newHouse => {
        this.houses.push(newHouse);
        this.formIncludeHouse.reset();
        this.srcPreviewAdd = '';
        this.selectedFileAdd = null;
      }
    })
    return formData
  }

  updateHouse(): FormData {
    const formData = this.getFormData(this.formEditHouse, this.selectedFileEdit)
    this.service.updateHouse(formData, this.formEditHouse.get('id')?.value??'').subscribe({
      next: updatedHouse => {
        const index = this.houses.findIndex( house =>  house?.id === updatedHouse?.id);
        this.houses[index] = updatedHouse;
        this.formEditHouse.reset();
        this.srcPreviewEdit = '';
        this.closeModal();
      }
    })
    return formData
  }

  deleteHouse(house: House): House {
    const payLoadHouseId = {
      house_id: house.id, ...house
    }
    this.service.deleteHouse(payLoadHouseId).subscribe({
      next: () => {
        this.houses = this.houses.filter(houseFiltered => houseFiltered.id !== house.id)
      }
    })
    return payLoadHouseId;
  }

  private get modalElement() {
    return this.modal?.nativeElement as HTMLDialogElement;
  }

  showModal(): boolean {
    this.modalElement.showModal();
     return this.modalElement.checkVisibility();
  }

  closeModal() {
    this.modalElement.close();
    return this.modalElement.checkVisibility();
  }

  editHouse(house: House): House {
    fetch(house.thumbnail_url).then(res => {
      return res.blob();
    }).then(blob => {
      this.selectedFileEdit = new File([blob], '');
      this.formEditHouse.patchValue(house as any);
      const reader = new FileReader();
      reader.onloadend = ()=> {
      this.srcPreviewEdit = reader.result?? ''
    }
    reader.readAsDataURL(this.selectedFileEdit);
      this.showModal()
    })
    return house;
  }

  getFormData(formGroup: FormGroup, file: any): FormData {
    const formData = new FormData();
    formData.append('thumbnail', file);
    formData.append('description', formGroup.get('description')?.value ?? '')
    formData.append('price', formGroup.get('price')?.value ?? '')
    formData.append('location', formGroup.get('location')?.value ?? '')
    formData.append('status', 'true');
    return formData;
  }
}
