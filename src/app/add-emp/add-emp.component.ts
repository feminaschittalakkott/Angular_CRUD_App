import { Component, OnInit, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  @Input() userData = { Name: '', Age: 0, Mark: 0 };

  constructor(public restservice: MyServiceService, private router: Router) { }
  ngOnInit(): void {

  }

  addEmpData(): void { debugger;
    this.restservice.addEmployee(this.userData).subscribe((res) => {
      this.router.navigate(['/AllEmployees']);
    }, (err) => {
      console.log(err)
    });
  }

}
