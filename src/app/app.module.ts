import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import {} from @

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MenuGridComponent } from './components/menu-grid/menu-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuItemComponent,
    MenuGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
