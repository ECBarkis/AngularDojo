import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteListComponent } from './quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewQuoteComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
