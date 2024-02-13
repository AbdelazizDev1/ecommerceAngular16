import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../products.service"

import { Products } from '../products';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent {

  productsList: Products[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private productsServ: ProductsService) { }
  
 
  ngOnInit() {
    
    this.productsServ.getAllProduct().subscribe((data: Products[])=> {
      
      this.productsList = data;

    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }



}
