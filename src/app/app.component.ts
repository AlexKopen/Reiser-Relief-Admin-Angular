import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { NewsPost } from './shared/models/news-post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newsPosts: NewsPost[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadNewsPosts();
    this.dataService.newsPosts$.subscribe(newsPosts => {
      this.newsPosts = newsPosts;
    });
  }
}
