import {Injectable} from '@angular/core';
import {FeathersService} from '../../../shared/feathers.service';
import {Subject} from 'rxjs';
import {IUserModel} from '../../../shared/app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userService = this.feathers.createService<IUserModel>('user');
  public list = new Subject<IUserModel[]>();

  constructor(private feathers: FeathersService) {
  }

  // CREATE
  async post(job: IUserModel) {
    try {
      return await this.userService.create(job);
    } catch (e) {
      alert(e.message);
    }
  }

  // update
  async update(id: string, props) {
    try {
      return await this.userService.update(id, props);
    } catch (e) {
      alert(e.message);
    }
  }

  // GET
  async get(id: string = null) {
    try {
      return await this.userService.get(id);
    } catch (e) {
      alert(e.message);
    }
  }

  async getAll() {
    try {
      const jobs = await this.userService.find();
      // @ts-ignore
      this.list.next(jobs.data);
    } catch (e) {
      alert(e.message);
    }
  }

  // REMOVE
  async remove(id: string = null) {
    try {
      await this.userService.remove(id);
      this.getAll();
    } catch (e) {
      alert(e.message);
    }
  }
}

