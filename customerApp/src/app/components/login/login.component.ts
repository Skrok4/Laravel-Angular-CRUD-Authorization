import { Component, OnInit } from '@angular/core';
import { DataService } from './../../service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  form!: FormGroup;
  data: any;
  token: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.dataService.login(this.form.value).subscribe((res) => {
      this.data = res;
      if (this.data.status === 1) {
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/']);
        this.toastr.success('', JSON.stringify(this.data.message), {
          timeOut: 2000,
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-top-right',
          tapToDismiss: false,
        });
      } else if (this.data.status === 0) {
        this.toastr.error('', JSON.stringify(this.data.message), {
          timeOut: 2000,
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-top-right',
          tapToDismiss: false,
        });
      }
    });
  }
}
