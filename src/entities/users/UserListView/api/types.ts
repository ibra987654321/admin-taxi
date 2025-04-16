export interface IUser {
  id: number;
  fullName: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMetaUsers {
  totalPages: number;
  total: number;
  page: number;
  limit: number;
}
export interface ApiResponseUsersData {
  meta: IMetaUsers;
  passengers: IUser[];
}
