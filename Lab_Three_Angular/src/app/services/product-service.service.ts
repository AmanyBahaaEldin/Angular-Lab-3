import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './../Shared Classes and Types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  products:IProduct[]=[
    {"ID":1,"Name":"Product1","Quantity":10,"Price":100,"Img":""},
    {"ID":2,"Name":"Product2","Quantity":10,"Price":100,"Img":""},
    {"ID":3,"Name":"Product3","Quantity":10,"Price":100,"Img":""}
];
  // url = '../assets/data/products.json';
  getAllProducts(){
    return this.products;
  }
  getProductByID(id:number){
    return !isNaN(id)?this.products.filter(product => product.ID ==id?product:null):null
}
}
