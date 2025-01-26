import { Component, inject, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailValidatorDirective } from './email-validator.directive';
import { ApplicantService } from '../Services/applicant.service';
import { Router } from '@angular/router';

type Gender = 'Male' | 'Female' | 'Prefer not to say';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, EmailValidatorDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  // Accessing the form as an onject
  // New syntax using signals
  private form = viewChild<NgForm>('form');

  // Injecting required services
  private applicantService = inject(ApplicantService);
  private router = inject(Router);

  // Scrolls to the top of the page when the component initializes
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Gender options and default selection
  genders: Gender[] = ['Male', 'Female', 'Prefer not to say'];
  gender: Gender = 'Male';

  // Mobile number input with formatting logic
  mobile_number: string = '';

  /**
   * Adds dashes to the mobile number at appropriate positions.
   * Automatically formats the number as "XXX-XXX-XXXX".
   */
  addDashes() {
    let mobile = this.mobile_number.trim();

    if (mobile.length === 4 && mobile[3] === '-') {
      // Removes the extra dash if already present
      mobile = mobile.slice(0, 3);
    }
    //
    else if (mobile.length >= 3 && mobile.length <= 5 && mobile[3] !== '-') {
      // Inserts a dash after the third digit
      mobile = `${mobile.slice(0, 3)}-${mobile.slice(3)}`;
    }
    //
    else if (mobile.length === 7 && mobile[6] === '-') {
      // Removes the extra dash after the sixth digit
      mobile = mobile.slice(0, 6);
    }
    //
    else if (mobile.length >= 6 && mobile.length <= 8 && mobile[6] !== '-') {
      // Inserts a dash after the sixth digit
      mobile = `${mobile.slice(0, 6)}-${mobile.slice(7, 8)}`;
    }
    //
    else if (mobile.length === 10 && mobile[9] === '-') {
      // Removes the extra dash after the ninth digit
      mobile = mobile.slice(0, 9);
    }
    //
    else if (mobile.length >= 9 && mobile.length <= 11 && mobile[9] !== '-') {
      // Inserts the final dash after the ninth digit
      mobile = `${mobile.slice(0, 6)}-${mobile.slice(7, 9)}-${mobile.slice(9)}`;
    }

    this.mobile_number = mobile;
  }

  // Education and employment status flags
  uneducated: boolean = false;
  stillLearning: boolean = false;

  unemployed: boolean = false;
  stillWorking: boolean = false;

  // Agreement checkbox flag
  agreement: boolean = false;

  // Gets the education form controls
  private get educationControls() {
    return this.form()?.controls['education'];
  }

  // Gets the employment form controls
  private get employmentControls() {
    return this.form()?.controls['experience'];
  }

  /**
   * Updates education fields when "uneducated" is selected.
   * Clears degree-related fields and resets the "stillLearning" flag.
   */
  changeEducationStatus() {
    if (this.uneducated) {
      this.educationControls?.patchValue({
        degree: '',
        institution: '',
        eduStartDate: '',
        eduEndDate: '',
        stillLearning: '',
      });

      this.stillLearning = false;
    }
  }

  /**
   * Automatically updates the education end date when "stillLearning" is selected.
   * Sets the end date to "Present" if still learning, otherwise clears it.
   */
  changeStillLearning() {
    setTimeout(() => {
      this.educationControls?.patchValue({
        eduEndDate: this.stillLearning ? 'Present' : '',
      });
    });
  }

  /**
   * Updates employment fields when "unemployed" is selected.
   * Clears job-related fields and resets the "stillWorking" flag.
   */
  changeEmploymentStatus() {
    if (this.unemployed) {
      this.employmentControls?.patchValue({
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        stillWorking: '',
      });

      this.stillWorking = false;
    }
  }

  /**
   * Automatically updates the employment end date when "stillWorking" is selected.
   * Sets the end date to "Present" if still working, otherwise clears it.
   */
  changeStillWorking() {
    setTimeout(() => {
      this.employmentControls?.patchValue({
        endDate: this.stillWorking ? 'Present' : '',
      });
    });
  }

  /**
   * Submits the form data if the form is valid.
   * - Adds the applicant information using the service.
   * - Navigates to the "applicant" route upon successful submission.
   */
  onSubmit() {
    if (this.form()?.valid) {
      this.applicantService.addInfo(this.form()?.value);
      this.router.navigate(['applicant']);
    }
  }
}
