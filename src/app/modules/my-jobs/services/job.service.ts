import {Injectable} from '@angular/core';
import {FeathersService} from '../../../shared/feathers.service';
import {Subject} from 'rxjs';
import {IJobModel, IPageModel} from '../../../shared/app.model';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  public jobService = this.feathers.createService<IJobModel | IJobModel[]>('job');
  public list = new Subject<IJobModel[]>();

  constructor(private feathers: FeathersService) {
  }

  // CREATE
  async post(job: IJobModel) {
    try {
      return await this.jobService.create(job);
    } catch (e) {
      alert(e.message);
    }
  }

  // update
  async update(id: string, props) {
    try {
      return await this.jobService.update(id, props);
    } catch (e) {
      alert(e.message);
    }
  }

  // GET
  async get(id: string = null) {
    try {
      return await this.jobService.get(id);
    } catch (e) {
      alert(e.message);
    }
  }

  async getAll(conf = null) {
    try {
      const jobs = await this.jobService.find();
      // @ts-ignore
      this.list.next(jobs.data);
    } catch (e) {
      alert(e.message);
    }
  }

  // REMOVE
  async remove(id: string = null) {
    try {
      await this.jobService.remove(id);
      this.getAll();
    } catch (e) {
      alert(e.message);
    }
  }
}
