import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entities/Employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})

export class ListEmployeesComponent implements OnInit {

Employees:any;


  constructor(http: HttpClient) { 
 
  http.get('https://jsonplaceholder.typicode.com/users')  
    .subscribe(response => {  
      this.Employees=response 
    });  


  }

  ngOnInit(): void {
  }

}
