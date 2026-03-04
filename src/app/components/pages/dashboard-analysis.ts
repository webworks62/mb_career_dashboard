import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="text-2xl font-semibold text-stone-700 mb-8">
      Dashboard Analysis
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
        <h3 class="text-sm text-stone-500">Total Users</h3>
        <p class="text-2xl font-bold text-stone-700 mt-2">1,245</p>
      </div>

      <div class="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
        <h3 class="text-sm text-stone-500">Active Jobs</h3>
        <p class="text-2xl font-bold text-stone-700 mt-2">87</p>
      </div>

      <div class="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
        <h3 class="text-sm text-stone-500">Services Booked</h3>
        <p class="text-2xl font-bold text-stone-700 mt-2">342</p>
      </div>
    </div>

    <div class="mt-12 bg-white p-6 rounded-xl border border-stone-200">
      <h2 class="text-lg font-medium text-stone-700 mb-4">
        Performance Overview
      </h2>
      <p class="text-stone-600 text-sm">
        Analytics summary of platform growth and engagement.
      </p>
    </div>
  `,
})
export class DashboardAnalysis {}
