import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  title: string;
  userCtrl: FormControl;
  userList = [];
  filterList: any;

  constructor(private http: Http,
              private router: Router) {
    http.get('/user/list')
      .map((res: Response) => res.json())
      .subscribe(
        data => this.userList.push(...data.result)
      );

    this.userCtrl = new FormControl();
    this.filterList = this.userCtrl.valueChanges
      .startWith(null)
      .map(username => this.filter(username));
  }

  filter(username: string) {
    if (!username) {
      return this.userList;
    }

    return this.userList.filter(user => new RegExp(`^${username}`, 'gi').test(user.name ? user.name : user.username));
  }

  selectUser(user) {
    this.userCtrl.patchValue(user.name || user.username);
    this.router.navigate(['/calendar', user.id]);
  }

  ngOnInit() {
    this.title = '吃饭！';
  }

}
