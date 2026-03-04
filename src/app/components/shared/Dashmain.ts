import { Component } from "@angular/core";

@Component({
  selector: "app-dashmain",
  standalone: true,
  template: `
    <main class="flex-1 p-12 overflow-y-auto">
      <!-- Header -->
      <section class="mb-12">
        <h1 class="text-2xl font-medium text-stone-700 mb-8">
          Dashboard Overview
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-white p-6 rounded-xl border border-stone-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 class="text-sm text-stone-500">Total Users</h3>
            <p class="text-2xl font-semibold text-stone-700 mt-2">1,245</p>
          </div>

          <div
            class="bg-white p-6 rounded-xl border border-stone-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 class="text-sm text-stone-500">Active Jobs</h3>
            <p class="text-2xl font-semibold text-stone-700 mt-2">87</p>
          </div>

          <div
            class="bg-white p-6 rounded-xl border border-stone-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h3 class="text-sm text-stone-500">Services Booked</h3>
            <p class="text-2xl font-semibold text-stone-700 mt-2">342</p>
          </div>
        </div>
      </section>

      <!-- MBCareers -->
      <section class="mb-12">
        <h2 class="text-xl font-medium text-stone-700 mb-4">MBCareers</h2>
        <div class="bg-white p-6 rounded-xl border border-stone-200">
          <p class="text-stone-600 text-sm">
            Manage job listings, applicants, and recruitment analytics.
          </p>
        </div>
      </section>

      <!-- MBServices -->
      <section>
        <h2 class="text-xl font-medium text-stone-700 mb-4">MBServices</h2>
        <div class="bg-white p-6 rounded-xl border border-stone-200">
          <p class="text-stone-600 text-sm">
            Monitor service bookings, performance, and customer insights.
          </p>
        </div>
      </section>
    </main>
  `,
})
export class Dashmain {}
