import { Component, OnInit } from '@angular/core';
import { NewsPost } from '../shared/models/news-post.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  newsPosts: NewsPost[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loadNewsPosts();
    this.dataService.newsPosts$.subscribe(newsPosts => {
      this.newsPosts = newsPosts;
    });
  }
}
