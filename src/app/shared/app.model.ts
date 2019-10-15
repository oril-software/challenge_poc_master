export interface IJobModel {
  id?: number;
  title: string;
  description?: string;
}

export interface IUserModel {
  id?: number;
  name: string;
  dateOfBirth: Date;
  email: string;
  status: string;
  hourlyRate?: string;
}

export interface IPageModel {
  limit: number;
  skip: number;
  total: number;
}
