import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private service:MovieapiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies');
    this.meta.updateTag({name:'description',content:'Search for any Movie'});
   }

  ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }

}
