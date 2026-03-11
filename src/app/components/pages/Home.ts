import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Dashboard } from '../const/Dashboard';
import { MBCareers } from '../const/Mbcareers';
import { MBServices } from '../const/mbservices';
import { IsstDashboard } from '../const/isstdasboard';

@Component({
  selector: 'app-home',
  template: `
    <section>
      @if (isTure === false) {
        <section
          class="relative flex items-center justify-center flex-col min-h-screen gap-8 overflow-hidden"
        >
          <!-- YouTube Background -->
          <iframe
            class="absolute top-0 left-0 w-full h-full object-cover scale-150 pointer-events-none"
            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&loop=1&playlist=ScMzIvxBSi4&controls=0&showinfo=0&modestbranding=1"
            frameborder="0"
            allow="autoplay; fullscreen"
          >
          </iframe>

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/60"></div>

          <!-- Content -->
          <div class="relative z-10 flex flex-col items-center gap-8 w-full">
            <!-- Heading -->
            <div class="text-center">
              <h1
                class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent wave-text"
              >
                {{ title | uppercase }}
              </h1>
            </div>

            <!-- Glass Login Card -->
            <div
              class="flex flex-col justify-center p-8 w-full max-w-md
      bg-white/10 backdrop-blur-xl border border-white/20
      shadow-2xl rounded-2xl"
            >
              <div class="flex flex-col gap-4 w-full">
                <label for="username" class="text-white font-medium"> Username </label>

                <input
                  pInputText
                  id="username"
                  [(ngModel)]="value"
                  class="rounded-md px-4 py-2 w-full text-sm bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div class="flex justify-center mt-6">
                <p-button
                  label="Login"
                  severity="success"
                  class="px-6"
                  (onClick)="check()"
                ></p-button>
              </div>
            </div>
          </div>
        </section>
      } @else {
        <section class="flex h-screen bg-gray-100">
          <!-- SIDE NAVBAR -->
          <aside
            class="w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-200 flex flex-col shadow-xl"
          >
            <!-- Logo -->
            <div class="p-6 text-2xl font-bold border-b border-slate-700 tracking-wide">
              Vidhura
            </div>

            <!-- Navigation -->
            <nav class="flex flex-col gap-2 p-4">
              <button
                class="text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:translate-x-1"
                (click)="activeSection = 'dashboard'"
              >
                Dashboard
              </button>

              <button
                class="text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-purple-600 hover:text-white hover:translate-x-1"
                (click)="activeSection = 'mbcs'"
              >
                MB Careers
              </button>

              <button
                class="text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:translate-x-1"
                (click)="activeSection = 'mbs'"
              >
                MB Services
              </button>

              <button
                class="text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:translate-x-1"
                (click)="activeSection = 'isst'"
              >
                Isst
              </button>

              <button
                class="text-left px-4 py-3 rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white hover:translate-x-1"
                (click)="logout()"
              >
                Logout
              </button>
            </nav>
          </aside>

          <!-- MAIN AREA -->
          <div class="flex flex-col flex-1">
            <!-- TOP NAVBAR -->
            <header class="bg-white shadow flex items-center gap-4 px-6 py-3">
              <!-- PROFILE ICON -->
              <i class="pi pi-user text-2xl text-blue-700"></i>

              <h2 class="text-lg font-semibold">Admin Panel</h2>
            </header>

            <!-- CONTENT AREA -->
            <main class="p-6 overflow-auto">
              @if (activeSection === 'dashboard') {
                <app-Dashhboard />
              } @else if (activeSection === 'mbcs') {
                <app-mbcareers />
              } @else if (activeSection === 'mbs') {
                <app-mbs />
              } @else if (activeSection === 'isst') {
                <app-isst />
              }
            </main>
          </div>
        </section>
      }
    </section>
  `,
  styles: `
    .wave-text {
      background-size: 300% 300%;
      animation: waveGradient 5s ease-in-out infinite;
    }

    @keyframes waveGradient {
      0% {
        background-position: 0% 50%;
      }
      25% {
        background-position: 50% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      75% {
        background-position: 50% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    Dashboard,
    MBCareers,
    MBServices,
    IsstDashboard,
  ],
})
export class Home implements OnInit {
  isTure: boolean = false;

  title: string = 'Vidhura';
  subtitle: string = 'make u life structure';
  value: string | undefined;
  activeSection: string = 'dashboard';

  constructor(private routes: Router) {}

  ngOnInit() {
    this.isTure = localStorage.getItem('tokendata') !== null;
    console.log('is true :::::', this.isTure);
  }

  check() {
    console.log('value ::::::', this.value);

    if (this.value === 'MPs307') {
      localStorage.setItem('tokendata', 'MPs307');
      this.isTure = true; // update UI without reload
    }
  }

  logout() {
    localStorage.removeItem('tokendata');
    window.location.reload();
  }
}
