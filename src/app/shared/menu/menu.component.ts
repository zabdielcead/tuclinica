import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] =[];


  constructor() { }

  ngOnInit(): void {
  

            this.items = [

             
              
              {
                label: 'Sómos',
                icon:  'pi pi-user-plus',
                routerLink: 'somos'
              },
              {
                label: 'Servicios',
                icon: 'pi pi-desktop',
                items:[
                  {
                    label: 'Odontología',
                    icon:  'pi pi-star',
                    routerLink: 'servicios'
                  },
                  {
                    label: 'SPA',
                    icon:  'pi pi-star',
                    routerLink: 'spa'
                  },
                 
                ]
              },
              {
                label: 'Membresía',
                icon:  'pi pi-shopping-cart',
                routerLink: 'membresia'
              },
              {
                label: 'Sucursales',
                icon:  'pi pi-globe',
                routerLink: 'sucursales'
              },
              {
                label: 'Citas',
                icon:  'pi pi-phone',
                routerLink: 'citas'
              },
          
              
          
              // {
              //   label: 'Pipes personalizados',
              //   icon: 'pi pi-cog',
              // }
          
          
          
          
              // {
              //     label: 'File',
              //     items: [{
              //             label: 'New', 
              //             icon: 'pi pi-fw pi-plus',
              //             items: [
              //                 {label: 'Project'},
              //                 {label: 'Other'},
              //             ]
              //         },
              //         {label: 'Open'},
              //         {label: 'Quit'}
              //     ]
              // },
              // {
              //     label: 'Edit',
              //     icon: 'pi pi-fw pi-pencil',
              //     items: [
              //         {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              //         {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              //     ]
              // }
          ];
    }  

}
