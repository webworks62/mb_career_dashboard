import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ProductService } from '../../services/productservice';

interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}

@Component({
  standalone: true,
 template: `
    <h1 class="text-2xl font-semibold text-stone-700 mb-6">MBCareers Section</h1>

    <div class="card">
      <!-- <div class="flex mb-2 gap-2 justify-end">
                <p-button (onClick)="value = 0" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 0" label="1" />
                <p-button (onClick)="value = 1" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 1" label="2" />
                <p-button (onClick)="value = 2" rounded="true" styleClass="w-8 h-8 p-0" [outlined]="value !== 2" label="3" />
            </div> -->
      <p-tabs [(value)]="value">
        <p-tablist>
          <p-tab [value]="0">Contact us</p-tab>
          <p-tab [value]="1">Subscribers</p-tab>
          <!-- <p-tab [value]="2">Header III</p-tab> -->
        </p-tablist>
        <p-tabpanels>
          <p-tabpanel [value]="0">
            <!-- <theme-switcher /> -->
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
      </p-tabs>
    </div>
  `,

  imports: [ButtonModule, TabsModule, TableModule, CommonModule],
  providers: [ProductService],
})
export class MBServices {
   value: number = 0;
  private productService = inject(ProductService);
  products!: Product[];

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }
}
