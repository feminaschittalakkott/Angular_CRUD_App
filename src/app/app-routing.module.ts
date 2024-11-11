import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AllempsComponent } from './allemps/allemps.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EditempComponent } from './editemp/editemp.component';

const routes: Routes = [
  { path: '', component: AllempsComponent },
  { path: 'AllEmployees', component: AllempsComponent },
  { path: 'addemp', component: AddEmpComponent },
  { path: 'empdetails/:id', component: EmpDetailsComponent },
  { path: 'edit/:id', component: EditempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
