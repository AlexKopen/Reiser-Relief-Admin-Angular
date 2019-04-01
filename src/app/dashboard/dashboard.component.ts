import { Component, OnInit } from '@angular/core';
import { NewsPost } from '../shared/models/news-post.model';
import { DataService } from '../shared/services/data.service';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  newsPosts: NewsPost[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.authService.authenticationState.subscribe(user => {
      if (user === null) {
        this.router.navigate(['/login']).then();
      }
    });

    this.dataService.loadNewsPosts();
    this.dataService.newsPosts$.subscribe(newsPosts => {
      this.newsPosts = newsPosts;
    });
  }
}
