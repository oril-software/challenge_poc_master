import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JobService} from '../../modules/my-jobs/services/job.service';
import {UserService} from '../../modules/my-users/services/user.service';
import {IJobModel, IUserModel} from '../../shared/app.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  private itemId: string;
  private selectedService: string;
  private services = {
    users: this.usersService,
    jobs: this.jobService
  };
  public item: IJobModel | IUserModel;
  public mailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(private route: ActivatedRoute, private router: Router, private jobService: JobService,
              private usersService: UserService, private location: Location) {
  }

  ngOnInit() {
    this.parseUrl();
  }

  private parseUrl() {
    const path = this.route.snapshot.url[0].path;
    if (path !== 'users' && path !== 'jobs') {
      this.router.navigateByUrl('/');
    } else {
      this.itemId = this.route.snapshot.paramMap.get('id');
      this.getItem(path);
    }
  }

  private async getItem(path) {
    const selectedId = parseInt(this.itemId, 10);
    if (selectedId) {
      this.item = await this.services[path].get(selectedId);
    } else {
      this.item = this.createNewItem(path);
    }
    this.selectedService = path;
  }

  private createNewItem(path) {
    switch (path) {
      case 'users':
        return {
          name: null,
          dateOfBirth: null,
          email: null,
          status: null,
          hourlyRate: null
        };
      case 'jobs':
        return {
          title: null,
          description: null
        };
    }
  }

  public async onSubmit(form) {
    const now = new Date();
    const dob = new Date(form.value.dateOfBirth);
    if (dob.getTime() > now.getTime()) {
      alert('Invalid Date');
      return;
    }
    if (!this.mailRegExp.test(form.value.email.toString())){
      alert('Invalid email');
      return;
    }
    if (!parseInt(this.itemId, 10)) {
      const newItem = await this.services[this.selectedService].post(form.value);
      if (newItem) {
        alert('Successfully added');
        this.location.back();
      }
    } else {
      const newItem = await this.services[this.selectedService].update(this.itemId, form.value);
      if (newItem) {
        alert('Successfully updated');
        this.location.back();
      }
    }
  }

  public goBack() {
    this.location.back();
  }
}
