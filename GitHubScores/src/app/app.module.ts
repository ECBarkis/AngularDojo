import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GITHubService } from './github.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GITHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
