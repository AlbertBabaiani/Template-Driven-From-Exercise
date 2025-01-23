import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { ApplicantService } from '../Services/applicant.service';

// Define the guard using CanMatchFn interface to control route matching
export const ShowApplicantInfoGuard: CanMatchFn = (route, segments) => {
  // Inject ApplicantService to access applicant information and Router to navigate
  const applicantService = inject(ApplicantService);
  const router = inject(Router);

  // Check if applicant information exists in the service
  if (applicantService.applicant_information()) {
    // If information exists, allow the route to match (navigation is allowed)
    return true;
  } else {
    // If no information exists, redirect the user to the 'form' route
    return router.createUrlTree(['error']);
  }
};
