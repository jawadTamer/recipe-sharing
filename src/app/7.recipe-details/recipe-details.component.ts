import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [HttpClientModule,FormsModule,NgFor],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
 data:any;
  itemId:any;
  currentItem: any;

  constructor(private http: HttpClient,private active:ActivatedRoute) {}

  ngOnInit(): void {

    this.itemId = this.active.snapshot.params['id'];
    console.log(this.itemId);
  
  
    this.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
  
       
        this.currentItem = this.data.find((item: { id: number }) => item.id === Number(this.itemId));
        console.log(this.currentItem);
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );
  }
  
  getData(): Observable<any> {
    const apiUrl = 'https://jawadtamer.github.io/recipesApi/api.json'; 
    return this.http.get<any>(apiUrl);
  }
}
