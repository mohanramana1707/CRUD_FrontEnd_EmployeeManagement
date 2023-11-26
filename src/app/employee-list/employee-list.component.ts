import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor( private empService:EmployeeService ,private router:Router){ }

  employees!:Employee[];

  ngOnInit(): void {
    
    // this.employees=[ 
    //   {
    //     "id":1,
    //     "firstName":"mohan",
    //     "secondName":"ram",
    //     "emailId":"mohan@123"
    //   },
    //   {
    //     "id":2,
    //     "firstName":"Ajith",
    //     "secondName":"Vijay",
    //     "emailId":"ajith@123"
    //   }
    // ]

    this.getEmployees();
    console.log("employee From Backend :")
    console.log( this.employees);
  }

 private getEmployees() {
    this.empService.getEmployeeList().subscribe(data =>{
        this.employees=data;
    });
  }

  updateEmployee(id: number) {
   //  this is responsible for updating the ID to the url
    this.router.navigate(['/updateEmployee',id]);

  }

  deleteEmployee(id: number){

    this.empService.deleteEmployee(id).subscribe({
      error:(err)=>console.log(err),
      complete:()=>console.log("deleted successfully!")
    })

  }

  employeeDetails(id: number){

    this.router.navigate(['employeeDetails',id])

  }

  
}
