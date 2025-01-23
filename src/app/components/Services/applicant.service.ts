import { Injectable, signal } from '@angular/core';
import { IApplicant } from '../Interfaces/applicant.interface';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  constructor() {}

  /**
   * A private signal to store the applicant's information.
   * - Initially set to `undefined` because no applicant data exists by default.
   * - Signals are used to manage state reactively without needing manual subscriptions.
   */
  private _applicant_information = signal<IApplicant | undefined>(undefined);

  /**
   * A read-only version of the `_applicant_information` signal.
   * - Exposing it as readonly ensures that the data cannot be modified directly from components.
   * - Components can only access the value for reading purposes.
   */
  readonly applicant_information = this._applicant_information.asReadonly();

  /**
   * Updates the applicant information.
   * - Uses the `.set()` method to update the signal value.
   * - Ensures that all updates to applicant information are controlled and validated.
   */
  addInfo(info: IApplicant) {
    this._applicant_information.set(info);
  }

  /**
   * Clears the applicant information by resetting the signal to `undefined`.
   */
  clear() {
    this._applicant_information.set(undefined);
  }
}
