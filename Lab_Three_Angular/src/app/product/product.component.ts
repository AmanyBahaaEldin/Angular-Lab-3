import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiscountOffer } from '../Shared Classes and Types/DiscountOffers';
import { IProduct  } from '../Shared Classes and Types/IProduct';
import { ICategory  } from '../Shared Classes and Types/ICategory';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  Discount:DiscountOffer;
  StoreName:string;
  StoreLogo:string;
  ProductList:Array<IProduct>;
  CategoryList:Array<ICategory>;
  ClientName:string;
  Ispurchased:boolean;
  prodID:any;
  // ProductList:any;



  constructor(private productService:ProductServiceService) {
    this.Discount = DiscountOffer.fifteenPercent;
    this.StoreName="amazon";
    this.StoreLogo="../../assets/amazon.jpg";
    this.ProductList=[];
    this.CategoryList = [{ID:1,Name:"Category1"},
                         {ID:2,Name:"Category2"},
                         {ID:3,Name:"Category3"}]
    this.ClientName="";
    this.Ispurchased=true;   
    this.prodID=1;

   }

   
  ngOnInit(): void {
    // this.ProductList = this.productService.getAllProducts();
    // this.ProductList=this.productService.getProductByID(this.prodID);
    
  }
  renderValues(){
    this.ProductList = this.productService.getAllProducts();
  }
  setPurchased(){
    this.Ispurchased = !this.Ispurchased;    
  }
  
}
