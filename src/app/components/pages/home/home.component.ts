import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservable: Observable<Food[]>
    activatedRoute.params.subscribe((params) => {
      console.log("foodsObservable:", foodsObservable);
      if (params.searchTerm) {
        foodsObservable = this.api.getAllFoodBySearchTerm(params.searchTerm)
      } else if (params.tag) {
        foodsObservable = this.api.getAllFoodByTag(params.tag)
      }
      else {
        foodsObservable = this.api.getAll()
      }
      foodsObservable.subscribe((serverFoods) => {
        console.log("serverFoods:", serverFoods);
        this.foods = serverFoods;
      })
    })
  }

  ngOnInit(): void {

  }

}
