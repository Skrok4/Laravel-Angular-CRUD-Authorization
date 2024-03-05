import { Employee } from 'src/app/employee';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee = new Employee();

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData() {
    this.dataService.getData().subscribe((res) => {
      this.employees = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.employee).subscribe((res) => {
      this.getEmployeesData();
      this.employee = new Employee();
    });
  }

  deleteData(id: number) {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      this.dataService.deleteData(id).subscribe((res) => {
        this.getEmployeesData();
      });
    }
  }

  updateData(id: number) {}
}
