# Angular-Laravel CRUD Application with Authorization

## Overview
This project is a simple CRUD application built using Angular for the frontend and Laravel for the backend, featuring user authorization. Below are the steps to set up and run the application.

## Laravel Backend Setup
1. Create a Laravel API project using the command: 
```
composer create-project laravel/laravel rest_api
````


2. Configure MySQL database connection in the `.env` file.

3. Create a migration for the employees table:

```
php artisan make:migration create_employees_table
```

4. Migrate the created table to the database:

```
php artisan migrate
```
5. Generate a model for employees:
```
php artisan make:model Employee -m
``` 

6. Create a controller for handling CRUD operations:
```
php artisan make:controller EmployeeController
```

7. Set up API routes.

8. Run the Laravel project:
```
php artisan serve
```

## Angular Frontend Setup
1. Install Angular CLI:
```
npm install -g @angular/cli@16
```
2. Create a new Angular application:

```
ng new customerApp
```
3. Create necessary components and services.

## User Authorization
1. Install tymon/jwt-auth library:

```
composer require tymon/jwt-auth
```

2. Generate JWT key:
```
php artisan jwt:secret
```


3. Follow the official documentation to configure JWT Auth:
[JWT Auth Documentation](https://jwt-auth.readthedocs.io/en/develop/lumen-installation/)

4. Create a controller for user management.

5. Implement user registration and authentication functionality in the Angular project.

6. Create models and components for user registration and authentication.


## Conclusion
This README provides an overview of the setup steps and features of the Angular-Laravel CRUD application with user authorization. Follow the instructions to set up and run the application successfully.

