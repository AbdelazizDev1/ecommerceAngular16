import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {


  listCategories: Categorie[];
  constructor(private catServ:CategoriesService){}

  ngOnInit() {
    

    this.catServ.getAllCategories().subscribe((data: Categorie[]) => {
      this.listCategories = data;
    })

  }

}
