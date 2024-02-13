import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { ArticlescardComponent } from './articlescard/articlescard.component';


const routes: Routes = [
  { path: "products/listProducts", component: ListproductsComponent },
  {path:"products/createProduct",component:CreateproductComponent},
  { path: "products/editProduct/:id", component: EditproductComponent },
  {path:"products/listarticlestable",component:ListarticletableComponent},
  {path:"products/articlescard" , component:ArticlescardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
