import { Component, OnInit } from '@angular/core';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieapiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Home ');
    this.meta.updateTag({name:'description',content:'watch online movies'});
    
   }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  // getMovie(id:any){
  //   this.service.getMovieDetails(id).subscribe(async(result)=>{
  //       console.log(result,'getmoviedetails#');
  //       this.getMovieDetailResult = await result;

  //       // updatetags
  //       this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
  //       this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
  //       this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});


  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
        // updatetags
        this.title.setTitle(`${this.trendingMovieResult.original_title} | ${this.trendingMovieResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.trendingMovieResult.original_title});
        this.meta.updateTag({name:'description',content:this.trendingMovieResult.overview});

    });
  }

  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }




  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }


}
