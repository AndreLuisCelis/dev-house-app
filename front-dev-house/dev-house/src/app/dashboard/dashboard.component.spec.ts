import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { House } from '../types/house';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let houseForTest: House = {
    description: 'TESTE',
    id: '1234',
    location: 'TESTE',
    price: 'TESTE',
    status: false,
    thumbnail: 'TESTE',
    thumbnail_url: 'TESTE',
    user: 'TESTE'
}


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, HttpClientTestingModule],
      providers: [ provideHttpClientTesting(), provideAnimations()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showModal', () => {
    let modalIsVisible = component.showModal();
    expect(modalIsVisible).toBeTruthy();
  });

  it('closeModal', () => {
    let modalIsVisible = component.closeModal();
    expect(modalIsVisible).toBeFalsy();
  });

  it('getFormData', () => {
    component.formIncludeHouse.get('description')?.setValue('Descrição teste');
    let formData = component.getFormData(component.formIncludeHouse, null);
    expect(formData.get('description')).toEqual('Descrição teste');
  });

  it('addHouse', () => {
    expect(component.addHouse()).toBeTruthy();
  });

  it('updateHouse', () => {
    expect(component.updateHouse()).toBeTruthy();
  });

  it('deleteHouse', () => {
    expect(component.deleteHouse(houseForTest)).toBeTruthy();
  });

  it('editHouse', () => {
    expect(component.editHouse(houseForTest)).toBeTruthy();
  });

  it('onFileSelectedAdd', () => {
    expect(component.onFileSelectedAdd({target:{files:[new Blob(['1,2,3'])]}})).toBeTruthy();
  });

  it('onFileSelectedEdit', () => {
    console.log('--->',component.onFileSelectedEdit({target:{files:[new Blob(['1,2,3'])]}}))
    expect(component.onFileSelectedEdit({target:{files:[new Blob(['1,2,3'])]}})).toBeTruthy();
  });
});
