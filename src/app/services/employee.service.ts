import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BASE_API_URL } from '../constants/ApiConstants';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private httpClient = inject(HttpClient);

  getEmployees(): Promise<Employee[]> {
    console.log('getEmployees');
    return lastValueFrom(
      this.httpClient.get<Employee[]>(`${BASE_API_URL}/employees`),
    )
  }
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
}
