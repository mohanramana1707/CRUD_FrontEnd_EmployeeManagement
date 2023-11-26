import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  id!:number;
  employee:Employee=new Employee();

  constructor(private activatedRoute:ActivatedRoute,private empService:EmployeeService){}
  
  ngOnInit(): void {

    this.id=this.activatedRoute.snapshot.params['id']   //'id': has to be same as  in route config
    this.empService.getEmployeeById(this.id).subscribe({
      next:d=>this.employee=d,
      error:err=>console.log(err)
    });
    
  }



}
