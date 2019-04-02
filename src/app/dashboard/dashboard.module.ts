import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NewsPostsComponent } from './news-posts/news-posts.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeaderComponent } from './header/header.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthService } from '../shared/services/auth.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CardComponent } from '../shared/card/card.component';
import { NewsPostsListComponent } from './news-posts-list/news-posts-list.component';
import { NewsPostsAddComponent } from './news-posts-add/news-posts-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    NewsPostsComponent,
    HeaderComponent,
    SideBarComponent,
    CardComponent,
    NewsPostsListComponent,
    NewsPostsAddComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  exports: [DashboardComponent]
})
export class DashboardModule {}
