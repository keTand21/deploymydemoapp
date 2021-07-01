import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from './fill-detail.model' ;
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-fill-details',
  templateUrl: './fill-details.component.html',
  styleUrls: ['./fill-details.component.css']
})
export class FillDetailsComponent implements OnInit {
  employeeForm : FormGroup;
  public ObjEmployeeModel :any = EmployeeModel ;
  public massage:string = "Employee from successfully Submit"

  public touched :boolean | undefined ;
  public gender:boolean |undefined ;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private homeService:HomeService ,

  ) { 
      this.employeeForm = this.fb.group({
        EmployeeId :  ['' ,[Validators.required ]],
        EmployeeName : ['' ,[Validators.required ]],
        EmailId :  [ '',[Validators.required ,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
        MobileNo :  ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        Gender :  [  '',[Validators.required ]],
        Address :  ['' ,[Validators.required ]],
      });
     
  }

  ngOnInit(): void {
  
    this.ObjEmployeeModel = EmployeeModel ;
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.employeeForm.controls[controlName].hasError(errorName);
  }

  genderdata(event:any){
  if(event){
    this.gender = false ;
  }else{
    this.gender = true ;
  } 

  }
  onSave() {
    console.log('===>',this.employeeForm.value);
    if(this.employeeForm.value.Gender == ''){
      this.gender = true ;
    }else {
      this.gender = false ;
    }
    this.homeService.markAsTouched(this.employeeForm.controls);
      if (this.employeeForm.valid) {
      const objParams = this.employeeForm.value;

       this.homeService.creatEmployee(objParams).subscribe((Response)=> {
          alert(this.massage)
          
           this.router.navigate(['/showDetails']);
           })

         }
        }
  
}
