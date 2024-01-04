import { Component, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [],
  template: `
    <h2>Employees</h2>
    @if(employees.isLoading()) {
      <p>Loading...</p>
    } @else if(employees.isSuccess()) {
      <ul>
        @for (employee of employees.data(); track employee.id) {
          <li>{{ employee.lastName+', '+employee.firstName }}</li>
        }
      </ul>
    } @else {
      <p>Unable to load data</p>
    }
  `,
  styles: ``
})
export class AllEmployeesComponent {
  employeeService=inject(EmployeeService);

  employees = injectQuery(() => ({
    queryKey: ['employees'],
    queryFn: () => this.employeeService.getEmployees()
  }))
}
