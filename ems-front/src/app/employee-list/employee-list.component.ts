import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[] = [];

  constructor(private employeeService:EmployeeService, private router: Router) {  }

  ngOnInit(): void {
    this.getEmployees();
    // this.employees = [
    //   {"id": 1, "firstName": "Mark", "lastName": "Jacker", "emailId": "mark@gmail.com"},
    //   {"id": 2, "firstName": "Angela", "lastName": "Baby", "emailId": "angela@gmail.com"},
    // ]
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

  viewEmployee(id:any){
    this.router.navigate(['employee-detials', id]);
  }

  updateEmployee(id:any){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe({
      next: data => {
        this.getEmployees();
      }
    })
  }

  

}
