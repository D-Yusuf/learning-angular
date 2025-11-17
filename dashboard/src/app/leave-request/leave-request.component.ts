import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LeaveRequestService } from './leave-request.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.scss'
})
export class LeaveRequestComponent {
  leaveRequestForm = new FormGroup({
    Email: new FormControl(''),
    FullName: new FormControl(''),
    MessageContent: new FormControl(''),
    Mobile: new FormControl(''),
    Subject: new FormControl(''),
    To: new FormControl('info@ibrgc.com'),
  });
  // constructor(public leaveRequestService: LeaveRequestService) { }
  // onSubmit() {
  //   console.log(this.leaveRequestForm.value);
  //   this.leaveRequestService.sendLeaveRequest(this.leaveRequestForm.value).subscribe((res) => {
  //     if (res.success) {
  //       alert('Leave request sent successfully');
  //     } else {
  //       alert('Failed to send leave request');
  //     }
  //   });
  // }
}
