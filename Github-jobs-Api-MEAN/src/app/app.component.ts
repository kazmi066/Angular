import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'job-search-project';
  formGroup;

  constructor(private router: Router,private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      search: '',
    });
  }

  onSubmit(formData) {
    var search = formData['search'];
    this.router.navigate(['/Search'], { queryParams: {query: search}});
  }
}







