import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'tabs', component: TabsComponent},
  {path: '', component: AppComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MenuComponent,TabsComponent,TableComponent]
