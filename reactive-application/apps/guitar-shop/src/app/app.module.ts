import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@reactive-application/material';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryDetailsComponent } from './inventory/inventory-details/inventory-details.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { UiToolbarModule } from '@reactive-application/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UsersListComponent,
    HomeComponent,
    InventoryComponent,
    InventoryDetailsComponent,
    InventoryListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
