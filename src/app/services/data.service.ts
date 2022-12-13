import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, switchMap, timer } from 'rxjs';
import { User } from '../types/User.type';
import { Todo } from '../types/Todo.type';

const NUMBER_OF_TODOS = 5;

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
          this.http.get<User[]>('https://jsonplaceholder.typicode.com/users'),
          this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos'),
        ])
      ),
      map(([users, todos]) => {
        const userTodos: Todo[] = todos.map((todo) => ({
          ...todo,
          userId: this.generateRandomInt(4),
        }));

        const todoSlicePosition = this.generateRandomInt(15);
        return users.slice(0, 3).map((item) => ({
          title: item.name,
          items: userTodos
            .filter((todo) => todo.userId === item.id)
            .slice(todoSlicePosition, todoSlicePosition + NUMBER_OF_TODOS),
        }));
      })
    );
  }
}
