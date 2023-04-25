import { Component, OnInit } from '@angular/core';
import { SubService } from 'src/app/sub/sub.service';
import { SubModel } from 'src/app/sub/sub-response';

@Component({
  selector: 'app-sub-sidebar',
  templateUrl: './sub-sidebar.component.html',
  styleUrls: ['./sub-sidebar.component.css']
})
export class SubSidebarComponent implements OnInit {
  
  subreddits: Array<SubModel> = [];
  displayViewAll!: boolean;

  constructor(private subredditService: SubService) {
    this.subredditService.getAllSubreddits().subscribe(data => {
      if (data.length > 3) {
        this.subreddits = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subreddits = data;
      }
    });
  }

  ngOnInit(): void { }

}
