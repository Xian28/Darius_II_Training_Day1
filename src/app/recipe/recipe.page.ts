import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  id : string
  recipe: any = [
    "Adobo",
    "Tinola",
    "Sinigang",
  ]
  name: string
  img: any = [
    "assets/img/Chicken_adobo.jpg",
    "assets/img/tinola-2.jpg",
    "assets/img/sinigang.jpg",
  ]
  instruction: any = [
    "Heat the oil in a cooking pot. " +
    "Add the garlic. " +
    "Add the peppercorns and bay leaves. " +
    "Put the pork belly in the cooking pot. " +
    "Pour the soy sauce and beef broth (or water). " +
    "Pour-in the vinegar. " +
    "Taste your pork adobo and decide to add salt if needed. " +
    "Transfer to a serving plate. ",
    "In a pot over medium heat, heat oil. Add onions, ginger, and garlic and cook until softened. " +
    "Add chicken and cook, stirring occasionally, for about 5 to 7 minutes or until chicken starts to change color and juices run clear. " +
    "Add fish sauce and cook, stirring occasionally, for about 1 to 2 minutes. " +
    "Add water and bring to a boil, skimming scum that floats on top. Lower heat, cover and simmer for about 30 to 35 minutes or until chicken is cooked through. " +
    "Add papaya and cook for about 3 to 5 minutes or until tender yet crisp. " + 
    "Season with salt and pepper to taste. " +
    "Add spinach and push down into broth. Cook until just wilted. Serve hot. ",
    "Rinse pork ribs and drain well." +
    "In a pot over medium heat, combine pork and enough water to cover. Bring to a boil, skimming scum that accumulates on top." +
    "Once broth clears, add tomatoes, onion, and fish sauce. Lower heat and simmer for about 1 to 1 1/2 hours or until meat is tender, adding more water as necessary to maintain about 8 cups. " +
    "Add gabi and cook for about 4 to 6 minutes or until tender. " +
    "Add chili peppers and radish. Continue to simmer for about 2 to 3 minutes. " +
    "Add long beans. Continue to cook for about 2 minutes. " +
    "Add eggplant and okra and cook for another 1 to 2 minutes. " +
    "If using packaged tamarind base, add to the pot and stir until completely dissolved. " +
    "Season with salt and pepper to taste. " +
    "Add bok choy and continue to cook for about 1 minute. Serve hot."
  ]
  constructor(
    private activatedroute: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id")
    if(this.id == '1'){
      this.name = this.recipe[0]
      this.img = this.img[0]
      this.instruction = this.instruction[0]
    }
    else if(this.id == '2'){
      this.name = this.recipe[1]
      this.img = this.img[1]
      this.instruction = this.instruction[1]
    }
    else if(this.id == '3'){
      this.name = this.recipe[2]
      this.img = this.img[2]
      this.instruction = this.instruction[2]
    }
  }

}
