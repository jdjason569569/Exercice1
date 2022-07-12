import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComprasComponent } from './compras.component';

describe('ComprasComponent', () => {
  let component: ComprasComponent;
  let fixture: ComponentFixture<ComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('return formPurchase valid', () =>{
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let name = app.formPurchase.controls['productName'];  
    let image = app.formPurchase.controls['price'];

    name.setValue('banano');
    image.setValue('6');

    expect(app.formPurchase.invalid).toBeFalse();
  });

  it('formPurchase creation', ()=>{
    expect(component.formPurchase.contains('productName')).toBeTruthy();
    expect(component.formPurchase.contains('price')).toBeTruthy();
  });
});
