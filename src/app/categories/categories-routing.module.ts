import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { ScategoriesComponent } from './scategories/scategories.component';
import { CreatecategorieComponent } from './createcategorie/createcategorie.component';
import { CreateScategorieComponent } from './create-scategorie/create-scategorie.component';

const routes: Routes = [
  { path: "categories/listCategories", component: ListcategoriesComponent },
  { path: "scategories/listCategories", component: ScategoriesComponent },
  { path: "categories/createCategorie", component: CreatecategorieComponent },
  {path:"categories/createSCategorie",component:CreateScategorieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
