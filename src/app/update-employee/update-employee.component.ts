import { Component ,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

constructor(private empService:EmployeeService ,private activatedRoute: ActivatedRoute, private router:Router){}

employee: Employee=new Employee();   // once the data is fetched from the DB , it will be updated in UI (2 way binding)
id!:number;

ngOnInit(): void {
  // need to retrive id from the Route Path using ACTIVATED ROUTE
    this.id=this.activatedRoute.snapshot.params['id'];

    console.log(this.id);

    this.empService.getEmployeeById(this.id).subscribe(
      {
        next:(d)=>this.employee=d ,
        error :(err)=>console.log(err)
      }
    );
    console.log(this.employee);

}



updateEmployee(){

  this.empService.updateEmployee(this.id,this.employee).subscribe({
    next:(d)=>this.employee=d,
    error:(err)=>console.log(err)
  })

}

onSubmit() {
  this.updateEmployee();
  // after updating go to EMployeeList page
  this.router.navigate(['/employee']);

}

}
