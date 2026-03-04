import { Mbcservices } from './../../services/mbcservices';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mbcareers',
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
              <p-table [value]="data" stripedRows [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template #header>
                  <tr>
                    <!-- <th>ID</th> -->
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>State</th>
                    <th>Degree</th>
                    <th>Course</th>
                  </tr>
                </ng-template>
                <ng-template #body let-product>
                  <tr>
                    <!-- <td>{{ product._id }}</td> -->
                    <td>{{ product.fullName }}</td>
                    <td>{{ product.phone }}</td>
                    <td>{{ product.email }}</td>
                    <td>{{ product.state }}</td>
                    <td>{{ product.degree }}</td>
                    <td>{{ product.course }}</td>
                  </tr>
                </ng-template>
              </p-table>
            </div>
          </p-tabpanel>
          <p-tabpanel [value]="1">
            <div class="card">
              <p-table [value]="subscribes" stripedRows [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template #header>
                  <tr>
                    <!-- <th>ID</th> -->

                    <th>Email</th>
                  </tr>
                </ng-template>
                <ng-template #body let-product>
                  <tr>
                    <!-- <td>{{ product._id }}</td> -->
                    <td>{{ product.email }}</td>
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
})
export class MBCareers implements OnInit {
  //  providers: [Mbcservices],
  value: number = 0;
  // private mbcs = inject(Mbcservices);
  data: data[] = [];
  subscribes: sub[] = [];

  constructor(
    private mbcs: Mbcservices,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.mbcs.getsubscribe().subscribe((res) => {
      this.subscribes = res;
      this.cdr.detectChanges();
    });
    this.mbcs.getData().subscribe((res) => {
      this.data = res;
      this.cdr.detectChanges();
    });
  }
}

interface data {
  _id: string;
  fullName: string;
  phone: number;
  email: string;
  state: string;
  degree: string;
  course: string;
  createdAt: string;
}

interface sub {
  _id: string;
  email: string;
}
