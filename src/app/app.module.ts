import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule, MatListOption } from '@angular/material/list';
import { TestContentComponent } from './test-content/test-content.component';
import { BarComponent } from './bar/bar.component';
import { PieDisplayComponent } from './pie-display/pie-display.component';
import { TestDirectiveDirective } from './test-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestModalComponent,
    TestContentComponent,
    BarComponent,
    PieDisplayComponent,
    TestDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
