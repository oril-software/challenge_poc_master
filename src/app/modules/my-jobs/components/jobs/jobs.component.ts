import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobService} from '../../services/job.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IPageModel} from "../../../../shared/app.model";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit, OnDestroy {
  public componentDestroy = new Subject<void>();
  public selectedList: any;
  public pageConfig: IPageModel;

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.list
      .pipe(takeUntil(this.componentDestroy))
      .subscribe((list) => {
        this.selectedList = list;
      });

    this.jobService.getAll();
  }

  public deleteItem(item) {
    const confirmation = confirm(`Do you want to remove ${item.name ? item.name : item.title}`);
    if (confirmation) {
      this.jobService.remove(item.id);
    }
  }

  ngOnDestroy(): void {
    this.componentDestroy.next();
    this.componentDestroy.complete();
  }


}
