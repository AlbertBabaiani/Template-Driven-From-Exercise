import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from '../Services/applicant.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-applicant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.css',
})
export class ApplicantComponent implements OnInit {
  // Injecting ApplicantService and Router services into the component
  private applicantService = inject(ApplicantService); // ApplicantService is used to manage applicant data
  private router = inject(Router); // Router is used to navigate between different routes

  // Retrieve applicant information using the applicantService
  applicant = this.applicantService.applicant_information;

  // Lifecycle hook that runs once the component is initialized
  ngOnInit(): void {
    // Scroll to the top of the page smoothly when the component is loaded
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Method to clear the applicant's information and navigate back to the form page
  backToHome() {
    this.applicantService.clear(); // Clears the stored applicant information in the service
    this.router.navigate(['form']); // Navigates to the form page, where the applicant can update information
  }
}
