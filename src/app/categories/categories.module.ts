import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { EditcategorieComponent } from './editcategorie/editcategorie.component';
import { CreatecategorieComponent } from './createcategorie/createcategorie.component';
import { ScategoriesComponent } from './scategories/scategories.component';
import { CreateScategorieComponent } from './create-scategorie/create-scategorie.component';
import { EditScategorieComponent } from './edit-scategorie/edit-scategorie.component';


@NgModule({
  declarations: [
    ListcategoriesComponent,
    EditcategorieComponent,
    CreatecategorieComponent,
    ScategoriesComponent,
    CreateScategorieComponent,
    EditScategorieComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
