import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-posts-add',
  templateUrl: './news-posts-add.component.html',
  styleUrls: ['./news-posts-add.component.scss']
})
export class NewsPostsAddComponent implements OnInit {
  addNewsForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  formSubmit(): void {
    console.log('we did it' + this.addNewsForm.valid);
  }
}
