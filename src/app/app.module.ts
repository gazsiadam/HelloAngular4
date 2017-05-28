import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MovieServiceService } from './services/movies/movie-service.service';
import { BoldDirective } from './directives/bold/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent, ListComponent]
})
export class AppModule { }
