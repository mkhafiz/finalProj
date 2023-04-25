import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createSubPayload } from './create-sub-payload';
import { Router } from '@angular/router';
import { SubService } from '../sub.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-sub',
  templateUrl: './create-sub.component.html',
  styleUrls: ['./create-sub.component.css']
})
export class CreateSubComponent implements OnInit {
  
  createSubredditForm: FormGroup;
  subredditModel: createSubPayload;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subredditService: SubService) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subredditModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubreddit() {
    this.subredditModel.name = this.createSubredditForm.get('title')?.value;
    this.subredditModel.description = this.createSubredditForm.get('description')?.value;
    this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }
}
