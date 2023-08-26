import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_foods
  }
  // search Food
  getAllFoodBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  // get ALl Tag
  getAllTags(): Tag[] {
    return sample_tags
  }
  // get Food by Tags
  getAllFoodByTag(tag: string): Food[] {
    return tag === 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
}
