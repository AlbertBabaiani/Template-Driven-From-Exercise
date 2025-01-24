# Angular 18 Template-Driven Forms Showcase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Overview

This project demonstrates the power and flexibility of Angular's **Template-Driven Forms**, emphasizing best practices for form validation, accessibility, and grouping of form controls. The application includes a multi-section job application form, showcasing how `ngModelGroup` can logically group form controls for better management and validation.

## Features

- **Template-Driven Forms**: Built using Angular's two-way binding with `ngModel` and validation directives.
- **Field Validation**: Includes required fields, pattern matching, minlength, maxlength, and custom validators.
- **Dynamic Validation Messages**: Displays user-friendly error messages based on validation states.
- **Grouped Form Controls**: Uses `ngModelGroup` for organizing form sections (e.g., personal information, address, education, experience).
- **Custom Validator**: Includes a directive to validate email confirmation.
- **Responsive Design**: Uses Bootstrap 5 classes for a responsive layout.
- **Dynamic Input Behavior**: Features such as auto-formatting of phone numbers and disabling fields based on user selections.

## Form Sections

### 1. Personal Information

- **Fields**: First Name, Last Name, Email, Confirm Email, Mobile Phone, Gender.
- **Validation**: All fields required with additional constraints such as minlength and pattern matching for phone numbers.

- **Logic**:

  - Real-time validation using `ngModel`.
  - Displays dynamic error messages when fields are invalid or left blank.

  ### Phone Number Formatting

  The **Mobile Phone** field automatically formats the input to match the pattern `XXX-XX-XX-XX`.

### 2. Address

- **Fields**: Address and City.
- **Validation**: Both fields are required with a minlength of 3 and a maxlength of 20.
- **Grouping**: These fields are grouped using the `ngModelGroup` directive for better logical organization and validation handling.

### 3. Education

- **Fields**: Degree, Institution, Start Date, End Date.
- **Dynamic Behavior**:
  - "No Education" checkbox disables all fields in this section using `[disabled]` and `[required]` directives.
  - "Still Learning" checkbox dynamically modifies the End Date field to allow open-ended education timelines.
- **Validation**: Fields dynamically validate based on user selections.

### 4. Experience

- **Fields**: Job Title, Company, Start Date.
- **Dynamic Behavior**:
  - "Unemployed" checkbox disables all fields in this section using `[disabled]` and `[required]`.
- **Grouping**: Fields are grouped under `ngModelGroup` for structured validation.

### 5. Gender Selection

- **Fields**: Gender (radio buttons).
- **Validation**: Requires one option to be selected.

## Key Directives and Concepts

1. **ngModel**: Enables two-way data binding for form controls, ensuring the model reflects the view and vice versa.
2. **ngModelGroup**: Used to logically group related form fields, such as `personal_information`, `address`, `education`, and `experience`. Each group has its own validation state for better control and organization.
3. **Validation Directives**: Includes built-in Angular directives such as `required`, `minlength`, `maxlength`, `pattern`, and `email`.
4. **Custom Validator**: Implements a directive to compare email fields (`appEmailValidator`).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
