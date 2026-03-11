import { Component } from '@angular/core';

@Component({
  selector: 'app-isst',
  template: `
    <div
      class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 min-h-screen flex flex-col items-center justify-center text-center "
      (mousemove)="moveGlow($event)"
    >
      <!-- Cursor Glow -->
      <div
        class="pointer-events-none fixed w-72 h-72 rounded-full bg-white/20 blur-3xl -translate-x-1/2 -translate-y-1/2"
        [style.left.px]="glowX"
        [style.top.px]="glowY"
      ></div>

      <!-- Icon -->
      <div class="bg-white/20 backdrop-blur-md p-6 rounded-full mb-6 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>

      <!-- Message -->
      <p class="text-white/90 text-lg md:text-xl max-w-xl mb-6">
        We are currently working on something amazing. Our services will be available very soon.
      </p>

      <!-- Highlight -->
      <p class="text-yellow-300 font-semibold text-lg mb-8">
        Services will be updated soon. Stay tuned!
      </p>

      <!-- Button -->
      <a
        href="/"
        class="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:scale-110 hover:bg-gray-100 transition"
      >
        Back to Home
      </a>
    </div>
  `,
  imports: [],
})
export class IsstDashboard {
  glowX = 0;
  glowY = 0;

  moveGlow(event: MouseEvent) {
    this.glowX = event.clientX;
    this.glowY = event.clientY;
  }
}
