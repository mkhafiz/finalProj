
import { Component, OnInit } from '@angular/core';
import { SubModel } from '../sub-response';
import { SubService } from '../sub.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-sub',
  templateUrl: './list-sub.component.html',
  styleUrls: ['./list-sub.component.css']
})
export class ListSubComponent implements OnInit {

  subreddits!: Array<SubModel>;
  constructor(private subredditService: SubService) { }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    })
  }
}
