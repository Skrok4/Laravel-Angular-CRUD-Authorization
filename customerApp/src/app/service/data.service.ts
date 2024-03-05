import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee';

import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  registerUser(data: any) {
    return this.httpClient.post(environment.apiUrl + '/api/register/', data);
  }

  login(data: any) {
    return this.httpClient.post(environment.apiUrl + '/api/login/', data);
  }

  getData() {
    return this.httpClient.get(environment.apiUrl + '/api/employees');
  }

  insertData(data: Employee) {
    return this.httpClient.post(environment.apiUrl + '/api/addEmployee', data);
  }

  deleteData(id: number) {
    return this.httpClient.delete(
      environment.apiUrl + '/api/deleteEmployee/' + id
    );
  }

  getEmployeeById(id: number) {
    return this.httpClient.get(environment.apiUrl + '/api/employee/' + id);
  }

  updateData(id: number, data: any) {
    return this.httpClient.put(
      environment.apiUrl + '/api/updateEmployee/' + id,
      data
    );
  }
}
