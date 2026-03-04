import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashnav } from "../shared/Dashnav";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, Dashnav],
  template: `
    <!-- Mobile -->
    <section
      class="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 md:hidden"
    >
      <div class="text-center px-6">
        <h1 class="text-2xl font-bold text-white mb-4">
          📱 Mobile View Restricted
        </h1>
        <p class="text-white text-lg opacity-90">
          Data will not be displayed on mobile screens.
        </p>
      </div>
    </section>

    <!-- Desktop -->
    <section class="hidden md:flex min-h-screen bg-stone-100">
      <app-dashnav />

      <!-- MAIN CONTENT CHANGES HERE -->
      <main class="flex-1 p-12 overflow-y-auto">
        <router-outlet></router-outlet>
      </main>
    </section>
  `,
})
export class Dashboards {}
