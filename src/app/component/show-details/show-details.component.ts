import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import {EmployeeModel} from '../fill-details/fill-detail.model' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
 
  displayedColumns: string[] = ['EmployeeId', 'EmployeeName', 'EmailId', 'MobileNo', 'Gender', 'Address'];
  public dataSource :any = [];
  @ViewChild(MatTable) table: MatTable<EmployeeModel> | undefined;
  constructor(
    private homeService:HomeService ,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.homeService.getallEmployee().subscribe((Response)=> { 
     this.dataSource.push(Response);  
       })
  }
  back(){
    this.router.navigate(['/fillDetails']);
  }

}
