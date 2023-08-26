import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private api: FoodService,
    activateRoute: ActivatedRoute
  ) {
    activateRoute.params.subscribe((params) => {
      console.log("params:", params)
      if (params.searchTerm) {
        this.foods = this.api.getAllFoodBySearchTerm(params.searchTerm)
      } else if(params.tag){
        console.log("params:", params)
        this.foods = this.api.getAllFoodByTag(params.tag)
      } 
      else {
        this.foods = api.getAll()
      }
    })
  }

  ngOnInit(): void {

  }

}
  