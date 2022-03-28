import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detials',
  templateUrl: './employee-detials.component.html',
  styleUrls: ['./employee-detials.component.css']
})
export class EmployeeDetialsComponent implements OnInit {

  id:number = 0;
  employee:Employee = new Employee();
  constructor(private route:ActivatedRoute, private employeeService:EmployeeService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: data => this.employee = data
    });

  }

}
