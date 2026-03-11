import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { Mbsservices } from '../../services/Mbs.service';

@Component({
  selector: 'app-mbs',
  template: `
    <div
      class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 min-h-screen flex flex-col items-center justify-center text-center px-6"
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
        routerLink="/"
        class="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:scale-110 hover:bg-gray-100 transition"
      >
        Back to Home
      </a>
    </div>
    <!-- <h1 class="text-2xl font-semibold text-stone-700 mb-6">MBCareers Section</h1> -->

    <!-- <div class="card"> -->
    <!-- <div class="flex mb-2 gap-2 justify-end">
                <p-button (onClick)="value = 0" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 0" label="1" />
                <p-button (onClick)="value = 1" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 1" label="2" />
                <p-button (onClick)="value = 2" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 2" label="3" />
            </div> -->
    <!-- <p-tabs [(value)]="value">
        <p-tablist>
          <p-tab [value]="0">Contact us</p-tab>
          <p-tab [value]="1">Subscribers</p-tab>
        </p-tablist>
        <p-tabpanels>
          <p-tabpanel [value]="0">
            <div class="card">
              <p-table [value]="products" stripedRows [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template #header>
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                  </tr>
                </ng-template>
                <ng-template #body let-product>
                  <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                  </tr>
                </ng-template>
              </p-table>
            </div>
          </p-tabpanel>
          <p-tabpanel [value]="1">
            <div class="card">
              <p-table [value]="products" stripedRows [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template #header>
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                  </tr>
                </ng-template>
                <ng-template #body let-product>
                  <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                  </tr>
                </ng-template>
              </p-table>
            </div>
          </p-tabpanel>
        </p-tabpanels>
      </p-tabs> -->
    <!-- </div> -->
  `,
  imports: [ButtonModule, TabsModule, TableModule, CommonModule],
})
export class MBServices {
  value: number = 0;
  // private productService = inject();
  // products!: Product[];

  constructor(private productService: Mbsservices) {}

  ngOnInit() {
    // this.productService.getProductsMini().then((data) => {
    //   this.products = data;
    // });
  }

  glowX = 0;
  glowY = 0;

  moveGlow(event: MouseEvent) {
    this.glowX = event.clientX;
    this.glowY = event.clientY;
  }
}
interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}
