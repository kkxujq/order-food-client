import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userList = [];

  table = {
    cols: [{
      name: 'name',
      label: '姓名'
    }, {
      name: 'username',
      label: '用户名'
    }],

    rows: this.userList
  };

  constructor(private http: Http) {
    http.get('/user/list')
      .map((res: Response) => res.json())
      .subscribe(
        data => this.userList.push(...data.result)
      );
  }
}
