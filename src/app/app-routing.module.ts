import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticletableComponent } from './products/listarticletable/listarticletable.component';

const routes: Routes = [
  {path:"" , component:ListarticletableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
