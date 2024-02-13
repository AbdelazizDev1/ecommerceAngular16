import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {

  _id?:object;
product: Products = new Products()

  constructor(private artserv:ProductsService
    ,private router:Router,
    private route:ActivatedRoute ) { }

    ngOnInit(): void {
      this._id=this.route.snapshot.params['id'];
      this.artserv.getProductById(this._id).subscribe(data=>this.product=data );
        
    }
    
    Sauvgarder(){
      
      this.artserv.updateProduct(this._id,this.product).subscribe(data=>this.router.navigate(['/products/listarticlestable']))
      
      }

  }



