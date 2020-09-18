import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/job.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {

  jobDetail : any;
  description: string

  constructor(private jobService: JobService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("params "+params);
      //this.query = params;
      this.jobService.getJobDetails(params).subscribe(data => {
      this.jobDetail = data as any;
      //var json = JSON.parse(this.jobDetail)
      this.description = this.jobDetail.description;
      console.log("desc" +this.description);
      console.log(this.jobDetail);
      })
    });

  }

}
