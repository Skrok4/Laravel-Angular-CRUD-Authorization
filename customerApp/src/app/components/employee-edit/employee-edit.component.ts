import { Employee } from 'src/app/employee';
import { DataService } from '../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  id: number;
  data: any;
  employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getEmployeeById(this.id).subscribe((res) => {
      this.data = res;
      this.employee = this.data;
    });
  }

  updateEmployee() {
    this.dataService.updateData(this.id, this.employee).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
