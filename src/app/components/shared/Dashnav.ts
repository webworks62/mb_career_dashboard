import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashnav',
  standalone: true,
  imports: [RouterModule],
  template: `
    <aside class="w-64 min-h-screen bg-white p-6 border-r border-stone-200">
      <h2 class="text-lg font-semibold text-stone-700 mb-10">
        MB Dashboard
      </h2>

      <nav class="space-y-3">

        <!-- Dashboard -->
        <a
          routerLink="analysis"
          routerLinkActive="bg-stone-200 text-stone-900"
          class="flex items-center gap-3 p-3 rounded-lg text-stone-600 hover:bg-stone-100 transition duration-200"
        >
          <img
            src="/assets/icons/dashboard-material-512px.png"
            alt="Dashboard"
            class="w-5 h-5 object-contain"
          />
          <span>Dashboard</span>
        </a>

        <!-- MBCareers -->
        <a
          routerLink="mbcareers"
          routerLinkActive="bg-stone-200 text-stone-900"
          class="flex items-center gap-3 p-3 rounded-lg text-stone-600 hover:bg-stone-100 transition duration-200"
        >
          <img
            src="/assets/icons/books-512px.png"
            alt="MBCareers"
            class="w-5 h-5 object-contain"
          />
          <span>MBCareers</span>
        </a>

        <!-- MBServices -->
        <a
          routerLink="mbservices"
          routerLinkActive="bg-stone-200 text-stone-900"
          class="flex items-center gap-3 p-3 rounded-lg text-stone-600 hover:bg-stone-100 transition duration-200"
        >
          <img
            src="/assets/icons/sofi-512px.png"
            alt="MBServices"
            class="w-5 h-5 object-contain"
          />
          <span>MBServices</span>
        </a>

      </nav>
    </aside>
  `,
})
export class Dashnav {}
