import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listarticletable',
  templateUrl: './listarticletable.component.html',
  styleUrls: ['./listarticletable.component.css']
})
export class ListarticletableComponent implements OnInit {


  productsList: Products[] = [];
  // dtOptions: DataTables.Settings = {};

  constructor(private productsServ: ProductsService) { }
  
 
  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers'
    // };
    this.productsServ.getAllProduct().subscribe((data: Products[]) => {
      
      this.productsList = data;
    });

    // this.dtOptions = {
    //   pagingType: 'full_numbers'
    // };
    
  }

  deletPro(id:any) {

    this.productsServ.deleteProduct(id).subscribe((res:any) => {
      this.productsList = this.productsList.filter( product => product._id != id)
    })
    
  }


  
}
