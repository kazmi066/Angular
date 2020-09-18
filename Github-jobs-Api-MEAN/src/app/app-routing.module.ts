import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowjobsComponent } from './pages/showjobs/showjobs.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';


const routes: Routes = [
  {
    path:'home',
    component:ShowjobsComponent
  },
  {
    path:'Search',
    component:JobSearchComponent,
  },
  {
    path:'jobdetails',
    component:JobdetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
