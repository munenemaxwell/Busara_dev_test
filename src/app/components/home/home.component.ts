import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../../services/userdetails.service'
import { CategoriesService } from '../../services/categories.service';
import { GetvideosService } from '../../services/getvideos.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
   public user: any ;
   public categories:any;
   public all_videos:any;
   public category_videos:any;

  constructor(
    private userdetails_service :UserdetailsService,
    private category_service :CategoriesService,
    private getvideos_service:GetvideosService,
    private token_service :TokenService,
    private router: Router
  ) { }

  logout():void {
    
    this.token_service.deleteToken();
    this.router.navigate(['/login']);
  }


   getOccurrence( value):number {
    return value;
   }


  watch(id):void {
    
    this.getvideos_service.get_categvideos(id).subscribe(
     data=> this.category_videos=data.results,
     error=>console.log(error)
    );

  }

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
