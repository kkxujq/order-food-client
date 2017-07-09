import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Ng2SmartTableModule, LocalDataSource} from 'ng2-smart-table';
import {MdDialog} from '@angular/material';
import {AddUserDialogComponent} from '../add-user-dialog/add-user-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  userList: LocalDataSource;
  count: number;
  countTime: string;

  table = {
    columns: {
      index: {
        title: '序号'
      },
      name: {
        title: '姓名'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    add: {
      confirmCreate: true
    }
  };

  constructor(private http: Http, public dialog: MdDialog) {
    this.userList = new LocalDataSource();
  }

  openAddUserDialog() {
    this.dialog.open(AddUserDialogComponent);
  }

  updateCount() {
    const startTime = moment(moment().format('YYYY-MM-DD')).unix();
    const endTime = startTime + moment.duration(1, 'days').asSeconds();

    this.http.get(`/count/update/startTime/${startTime}/endTime/${endTime}`)
      .map((res: Response) => res.json())
      .subscribe(({result}) => {
        this.count = result.count;
        this.countTime = moment.unix(result.countTime).format('YYYY年MM月DD日HH时mm分');
      });
  }

  ngOnInit() {
    this.http.get('/user/list')
      .map((res: Response) => res.json())
      .subscribe(({result}) => {
        result.forEach((user, index) => {
          user.index = index + 1;
          if (!user.name) {
            user.name = user.username;
          }
        });

        this.userList.load(result);
      });

    this.http.get('/count')
      .map((res: Response) => res.json())
      .subscribe(({result}) => {
        this.count = result.count;
        this.countTime = moment.unix(result.countTime).format('YYYY年MM月DD日HH时mm分');
      });
  }
}
