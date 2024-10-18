import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-share-card',
  standalone: true,
  imports: [NgClass,NgFor,NgIf,NgbRatingModule,RouterModule],
  templateUrl: './share-card.component.html',
  styleUrl: './share-card.component.css'
})
export class ShareCardComponent {
  favorites: any[] = [];
  fromWhere:string = "sharing";

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = false;
  }
  shareList:any = JSON.parse(localStorage.getItem('sharelist') || '[]');
  deleteshare(id:number){
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete recipe',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.shareList = this.shareList.filter((item:any) => item.id != id);
        localStorage.setItem('sharelist', JSON.stringify(this.shareList));

        Swal.fire({
          title: 'Success!',
          text: 'Deleted successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    });
   }
   ngOnInit(): void {
    this.loadFavorites(); 
   
  }
   addToFavorites(recipe: any) {
    const index = this.favorites.findIndex(fav => fav.id === recipe.id);
    if (index === -1) {
      this.favorites.push(recipe);
    } else {
      this.favorites.splice(index, 1); 
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  loadFavorites() {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favorites = storedFavorites;
  }

  isFavorite(recipe: any): boolean {
    return this.favorites.some(fav => fav.id === recipe.id);
  }
}
