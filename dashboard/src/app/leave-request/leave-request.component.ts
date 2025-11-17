import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LeaveRequestService } from './leave-request.service';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.scss'
})
export class LeaveRequestComponent {
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  leaveRequestForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    FullName: new FormControl('', [Validators.required]),
    MessageContent: new FormControl('', [Validators.required]),
    Mobile: new FormControl('', [Validators.required]),
    Subject: new FormControl('', [Validators.required]),
    To: new FormControl('info@ibrgc.com'),
  });

  constructor(private leaveRequestService: LeaveRequestService) { }

  onSubmit() {
    if (this.leaveRequestForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.leaveRequestService.sendLeaveRequest(this.leaveRequestForm.value).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        if (res.success) {
          this.submitSuccess = true;
          this.leaveRequestForm.reset({
            To: 'info@ibrgc.com'
          });
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        } else {
          this.submitError = true;
          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = true;
        console.error('Error sending leave request:', error);
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      }
    });
  }

  markFormGroupTouched() {
    Object.keys(this.leaveRequestForm.controls).forEach(key => {
      const control = this.leaveRequestForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.leaveRequestForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName} is required`;
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }
}
