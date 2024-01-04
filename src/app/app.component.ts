import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularQueryDevtools, AllEmployeesComponent],
  template: `
    <main class="main">
      <angular-query-devtools initialIsOpen="true" />
      <app-all-employees />
    </main>
    <router-outlet></router-outlet>

  `,
})
export class AppComponent {
}
