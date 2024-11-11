import { Component, OnInit } from '@angular/core';
import { MyServiceService, Employees } from '../my-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  emp: Employees | undefined;
  id: number = 0;
  constructor(public restservice: MyServiceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
      var paramId = this.route.snapshot.paramMap.get("id"); // id get from querystring or url
      if(paramId !== null && paramId !== undefined){
        this.id =+ paramId;
      }
      this.restservice.getEmployee(this.id).subscribe(
        (data: Employees) => this.emp = {...data}
      );
  }
}
