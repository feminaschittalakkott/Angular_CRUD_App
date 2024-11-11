import { Component, OnInit } from '@angular/core';
import { MyServiceService, Employees } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allemps',
  templateUrl: './allemps.component.html',
  styleUrls: ['./allemps.component.css']
})
export class AllempsComponent implements OnInit {
  getData: Employees[] = [];

  constructor(public restservice: MyServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.restservice.getAllEmployees().subscribe((res: any) => {
      this.getData = res;
    });
  }

  deleteEmp(id: number): void {
    this.restservice.deleteEmployee(id).subscribe(() => {
      this.getAllData();
    }, (err) => {
      console.log(err)
    })
  }

}
