import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryDetailsComponent } from './inventory/inventory-details/inventory-details.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserDetailsComponent, UsersListComponent, HomeComponent, InventoryComponent, InventoryDetailsComponent, InventoryListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
