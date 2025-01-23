import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { ShowApplicantInfoGuard } from './components/applicant/guards';
import { ErrorComponent } from './components/error/error.component';

// Defining the routes for the application
export const routes: Routes = [
  // Default route, redirecting to the 'form' path
  {
    path: '', // Empty path represents the root URL
    redirectTo: 'form', // Redirect to the 'form' route if no path is provided
    pathMatch: 'full', // Ensures the redirection only happens for an exact match
  },

  // Route for the application form
  {
    path: 'form', // Path for the form component
    component: FormComponent, // Component to render for this path
    title: 'Application Form', // Sets the page title for this route
  },

  // Route for the applicant information page
  {
    path: 'applicant', // Path for the applicant component
    component: ApplicantComponent, // Component to render for this path
    title: 'Applicant', // Sets the page title for this route
    canMatch: [ShowApplicantInfoGuard], // Applies the guard to this route to check if applicant info exists
  },

  // Wildcard route to handle all other undefined routes
  {
    path: '**', // Matches any path that does not exist in the defined routes
    component: ErrorComponent, // Component to render for undefined routes
    title: 'Error', // Sets the page title for the error route
  },
];
