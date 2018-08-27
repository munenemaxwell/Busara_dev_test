import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../../services/userdetails.service'
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
   public user: any;
   public categories:any;

  constructor(
    private userdetails_service :UserdetailsService,
    private category_service :CategoriesService
  ) { }

  ngOnInit() {
    this.userdetails_service.get_user_details().subscribe(
      data => this.user=data,
      error => console.log(error)
    );

    this.category_service.get_list().subscribe(
      data => this.categories=data.results,//this.categories,
      error=>console.log(error)
    );
  }

}
