import { Component, Input, OnInit } from '@angular/core';
import { MyServiceService, Employees } from '../my-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  @Input() empData: any = { Name: '', Age: 0, Mark: 0 };
  id: number = 0;
  constructor(public restservice: MyServiceService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    var paramId = this.route.snapshot.paramMap.get("id"); // id get from querystring or url
    if (paramId !== null && paramId !== undefined) {
      this.id = + paramId;
    }
    this.restservice.getEmployee(this.id).subscribe((data:{})=>{
      this.empData = data;
    })
  }

  updateEmployee(): void {
    this.restservice.editEmployee(this.id, this.empData).subscribe((res)=>{
      this.router.navigate(['/AllEmployees/']);
    }, (err)=>{
      console.log(err)
    });
  }
}
