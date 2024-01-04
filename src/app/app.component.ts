import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { EmployeeService } from './services/employee.service';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AngularQueryDevtools],
  templateUrl: './app.component.html',
})
export class AppComponent {
  employees = injectQuery(() => ({
    queryKey: ['employees'],
    queryFn: () => inject(EmployeeService).getEmployees()
  }))
}
