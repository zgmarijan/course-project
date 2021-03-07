import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://www.seriouseats.com/2010/06/2021-02-12-Real-Deal-Kung-Pao-Chicken-MHOM-21-200x150.jpg'
    ),
    new Recipe('Test recipe two', 'This is a test also..',
      'https://www.dukeshillham.co.uk/Portals/0/LiveBlog/1224/spiced-mackerel-recipe.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
