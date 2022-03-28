import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
     next: data => {
       this.employee = data
     },
     error: msg => console.log(msg)
     
    })
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe({
      next: data => {
        console.log(data)
        this.employee = new Employee()
      },
      error: msg => console.log(msg)

  })}

  onSubmit(){
    this.updateEmployee();
  }

}
