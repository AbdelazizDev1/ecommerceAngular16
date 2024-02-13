import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-articlescard',
  templateUrl: './articlescard.component.html',
  styleUrls: ['./articlescard.component.css']
})
export class ArticlescardComponent {

  articles:Products[]=[];

  constructor(private prodserv:ProductsService){}
  
  ngOnInit(): void {
    this.loadArticles()
    }

    loadArticles() {
      this.prodserv.getAllProduct().subscribe(data=> {
        this.articles = data
      })
    }
  }
  




