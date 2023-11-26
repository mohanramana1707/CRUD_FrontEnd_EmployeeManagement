import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

employee:Employee=new Employee();

  constructor( private empService:EmployeeService ,private router:Router){}
  ngOnInit(): void {
  
  }

  onSubmit() {

    console.log(this.employee);
    this.saveEmployee();
    this.goToEmployeeList();    
  }

  saveEmployee(){
    this.empService.createEmployee(this.employee).subscribe({
      next: (data)=>console.log(data),
      error: (err)=>console.log(err),
      complete :()=>console.log("data sent  successfull")
    });
   
  }

  // to navigate to employee page after form is submited
  goToEmployeeList(){
      this.router.navigate(['/employee']);
  }
    

}
