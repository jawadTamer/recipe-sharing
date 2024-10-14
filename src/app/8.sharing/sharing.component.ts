import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Component} from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';
import { Ingredient, RecipeInterface } from '../recipe-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sharing',
  standalone: true,
  imports: [FormsModule, NgFor, NgbRatingModule,RouterModule, NgIf, NgClass],
  templateUrl: './sharing.component.html',
  styleUrl: './sharing.component.css'
})
export class SharingComponent{
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = false;
  }

  ingredientsArr:Array<object> | any = [];
  instructionsArr:Array<string> = [];
  idCounter:number | any = localStorage.getItem("idCounter") || 0;

  shareList:any = JSON.parse(localStorage.getItem('sharelist') || '[]');

  recipeObj:RecipeInterface = {
    id : 0,
    name : "",
    category : "",
    image : "",
    ingredients: [],
    instructions: [],
    rating : 0
  };
  ingredobj:Ingredient = {
    name: "",
    quantity: ""
  }
  addIngredient(Ingredientname:string , quantity:string){
    this.ingredobj = {name:Ingredientname,quantity:quantity};
    this.ingredientsArr.push(this.ingredobj);    
  }
  addInstruction(Instruction:string){
    this.instructionsArr.push(Instruction);
  
  }
  share(shereform:NgForm,name:string,category:string,image:string,rating:any){
    if(shereform.valid){
      
      this.recipeObj = {
        id : this.idCounter,
        name : name, 
        category : category, 
        image : image, 
        rating : rating,
        ingredients : this.ingredientsArr, 
        instructions : this.instructionsArr
      };
      this.shareList.push(this.recipeObj);
      
      localStorage.setItem('sharelist', JSON.stringify(this.shareList));
      
      Swal.fire({
        title: 'Success!',
        text: 'share successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      this.idCounter = ++this.idCounter;
      localStorage.setItem( "idCounter" , this.idCounter);
      shereform.reset();
      console.log("lisr : ",this.shareList);
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'sharing failed. Please complete the data.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
    this.ingredientsArr = [];
    this.instructionsArr = [];  
  }
  
}
