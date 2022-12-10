import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  combineLatest,
  map,
  switchMap,
  timer,
} from 'rxjs';
import { DataComment } from '../types/DataComment.type';
import { Post } from '../types/Post.type';
import { Todo } from '../types/Todo.type';

const NUMBER_OF_POSTS = 10;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private generateRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  public getData() {
    return timer(0, 10000).pipe(
      switchMap(() =>
        combineLatest([
          this.http.get<Post[]>(
            'https://jsonplaceholder.typicode.com/posts'
          ),
          this.http.get<Todo[]>(
            'https://jsonplaceholder.typicode.com/todos'
          ),
          this.http.get<DataComment[]>(
            'https://jsonplaceholder.typicode.com/comments'
          ),
        ])
      ),
      map(([posts, todos, comments]) => {
        const postsSlice = this.generateRandomInt(90);
        const todosSlice = this.generateRandomInt(190);
        const commentsSlice = this.generateRandomInt(490);
        return [
          posts.slice(postsSlice, postsSlice + NUMBER_OF_POSTS),
          todos.slice(todosSlice, todosSlice + NUMBER_OF_POSTS),
          comments.slice(commentsSlice, commentsSlice + NUMBER_OF_POSTS)
        ];
      })
    );
  }
}
