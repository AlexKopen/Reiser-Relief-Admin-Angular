import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { NewsPost } from '../models/news-post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  newsPosts$ = new BehaviorSubject<NewsPost[]>([]);

  private newsPostsCollection: AngularFirestoreCollection<NewsPost>;

  constructor(private db: AngularFirestore) {}

  loadNewsPosts(): void {
    this.newsPostsCollection = this.db.collection<NewsPost>('news-posts', ref =>
      ref.orderBy('date', 'desc')
    );

    this.newsPostsCollection
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
        )
      )
      .subscribe(newsPostsUpdate => {
        this.newsPosts$.next(newsPostsUpdate);
      });
  }
}
