import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'users', component: UsersComponent },
  // { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
