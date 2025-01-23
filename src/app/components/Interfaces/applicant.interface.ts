/**
 * Represents the data structure for an applicant submitting the form.
 */
export interface IApplicant {
  /**
   * Personal information about the applicant.
   */
  personal_information: {
    /** The applicant's email address. */
    email: string;
    /** The applicant's first name. */
    first_name: string;
    /** The applicant's gender (e.g., 'male', 'female', 'other'). */
    gender: string;
    /** The applicant's last name. */
    last_name: string;
    /** The applicant's mobile phone number. */
    mobile_phone: string;
    /** The applicant's repeated email for confirmation. */
    repeat_email: string;
  };

  /**
   * Address information for the applicant.
   */
  address: {
    /** The street address of the applicant. */
    address: string;
    /** The city where the applicant resides. */
    city: string; // Empty string default
  };

  /**
   * Educational background of the applicant.
   */
  education: {
    /** Indicates if the applicant has no formal education. */
    noEducation: boolean;
    /** The degree earned by the applicant (if any). */
    degree: string;
    /** The date the applicant's education ended. */
    eduEndDate: Date;
    /** The date the applicant's education started. */
    eduStartDate: Date;
    /** The name of the institution where the applicant studied. */
    institution: string;
    /** Indicates if the applicant is still pursuing this education. */
    stillLearning: boolean;
  };

  /**
   * Professional experience details of the applicant.
   */
  experience: {
    /** The name of the company where the applicant worked or works. */
    company: string;
    /** Employment status of the applicant (true = employed, false = unemployed). */
    employment_status: boolean;
    /** The applicant's job title at the company. */
    jobTitle: string;
    /** The start date of the applicant's job. */
    startDate: Date;
    /** The end date of the applicant's job. */
    endDate: Date;
    /** Indicates if the applicant is still working in this role. */
    stillWorking: boolean;
  };

  /**
   * Social and professional profile links of the applicant.
   */
  profile_links: {
    /** Link to the applicant's Facebook profile. */
    facebook: string;
    /** Link to the applicant's LinkedIn profile. */
    linkedin: string;
    /** Link to the applicant's Twitter profile. */
    twitter: string;
    /** Link to the applicant's personal or professional webpage. */
    webpage: string;
  };

  /**
   * Indicates if the applicant has agreed to the terms and conditions.
   */
  agreement: boolean;
}
