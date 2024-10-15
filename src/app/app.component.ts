import { Component, inject, Renderer2, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchChangeEvent, InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PickListModule } from 'primeng/picklist';
import { TreeModule } from 'primeng/tree';
import { tree } from './tree';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    TreeModule,
    PickListModule,
    InputSwitchModule,
    MessageModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  renderer = inject(Renderer2);

  messages = signal([
    { severity: 'info', content: 'Dynamic Info Message' },
    { severity: 'success', content: 'Dynamic Success Message' },
    { severity: 'warn', content: 'Dynamic Warn Message' },
  ]);
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCity: any;
  date: Date | undefined;
  checked = false;
  title = 'angularPrimeMigration';
  files: TreeNode[] = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            {
              key: '0-0-0',
              label: 'Expenses.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Expenses Document',
            },
            {
              key: '0-0-1',
              label: 'Resume.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Resume Document',
            },
          ],
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [
            {
              key: '0-1-0',
              label: 'Invoices.txt',
              icon: 'pi pi-fw pi-file',
              data: 'Invoices for this month',
            },
          ],
        },
      ],
    },
  ];
  tree = tree;
  selectedFile!: TreeNode;

  nodeSelect(event: any): void {
    console.log(event);
  }

  switchTheme($event: InputSwitchChangeEvent): void {
    // switch the class dark to the html tag
    this.renderer[!$event.checked ? 'removeClass' : 'addClass'](document.documentElement, 'p-dark');
  }
}
