import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  formPurchase! : FormGroup;
  errorProduct: string = '';
  errorPrice: string = '';

  product: Product = {
    productName : '',
    price: 0
  }

  constructor( private fb: FormBuilder, ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.formPurchase = this.fb.group({
      productName: [this.product.productName, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      price: [this.product.price, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(5), Validators.max(20)]],
    });
  }
  sendform(){
    this.errorProduct = '';
    this.errorPrice = '';
    if(this.formPurchase.valid){
      Swal.fire({
        title: '',
        text: 'Se envió la información!',
        confirmButtonText: 'Aceptar'
      });
    }else{
      if(this.formPurchase.get('productName')?.value.length < 5){
         this.errorProduct += 'El nombre del producto debe ser mayor a 5 caracteres';
      }
      if(this.formPurchase.get('productName')?.value.length > 20){
         this.errorProduct += 'El nombre del producto debe ser  menor a 20 caracteres'
      }
      if(this.formPurchase.get('price')?.value < 5){
        this.errorPrice += 'el precio debe ser mayor a 5';
      }
      if(this.formPurchase.get('price')?.value > 20){
        this.errorPrice += 'el precio debe ser menor a 20';
      }
      Swal.fire({
        title: '',
        text: `${this.errorProduct}  ${this.errorPrice}`,
        confirmButtonText: 'Aceptar'
      });
    }
    this.clearForm();
  }

  clearForm(){
   this.formPurchase.reset();
  }

  get productName(){
    return this.formPurchase.get('productName');
  }

  get price(){
    return this.formPurchase.get('price');
  }

}
