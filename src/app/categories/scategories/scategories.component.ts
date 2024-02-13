import { Component } from '@angular/core';
import { Scategorie } from '../scategorie';
import { SCategoriesService } from '../s-categories.service';

@Component({
  selector: 'app-scategories',
  templateUrl: './scategories.component.html',
  styleUrls: ['./scategories.component.css']
})
export class ScategoriesComponent {

  listScategories: Scategorie[];

  constructor(private scatService:SCategoriesService){}

  ngOnInit() {
    

    this.scatService.getAllSCategories().subscribe((data: Scategorie[]) => {
      this.listScategories = data;
    })


  }

}
