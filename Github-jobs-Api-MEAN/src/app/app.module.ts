import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowjobsComponent } from './pages/showjobs/showjobs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobSearchComponent } from './job-search/job-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowjobsComponent,
    JobSearchComponent,
    JobdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
