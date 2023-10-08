import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Dating app';
  users: any;
  faCoffee = faCoffee;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => console.log(err),
      complete: () => console.log('Request has been completed.'),
    });
  }
}
