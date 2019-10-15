import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public componentDestroy = new Subject<void>();
  public selectedList: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.list
      .pipe(takeUntil(this.componentDestroy))
      .subscribe((list) => {
        this.selectedList = list;
      });
    console.log()
    this.userService.getAll();
  }

  public deleteItem(item) {
    const confirmation = confirm(`do you wont to remove ${item.name ? item.name : item.title }`);
    if (confirmation) {
      this.userService.remove(item.id);
    }
  }

  ngOnDestroy(): void {
    this.componentDestroy.next();
    this.componentDestroy.complete();
  }
}
