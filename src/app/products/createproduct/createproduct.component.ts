import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
 
  product: Products = new Products();
   
  constructor(private prodserv:ProductsService){}
  Sauvgarder(){
    this.prodserv.createProduct(this.product).subscribe((data)=>
    console.log("Insertion effectuer avec succées"))
  }
  
  }


