<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\UserController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

// Get all employees
Route::get('employees', [EmployeeController::class, 'getEmployee']);

// Get employee detail by id
Route::get('employee/{id}', [EmployeeController::class, 'getEmployeeById']);

// Add Employee
Route::post('addEmployee', [EmployeeController::class, 'addEmployee']);

// Update Employee
Route::put('updateEmployee/{id}', [EmployeeController::class, 'updateEmployee']);

// Delete Employee
Route::delete('deleteEmployee/{id}', [EmployeeController::class, 'deleteEmployee']);
