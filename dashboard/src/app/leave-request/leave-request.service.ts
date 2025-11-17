import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private http: HttpClient) { }
  sendLeaveRequest(leaveRequest: any): Observable<any> {
    return this.http.post('https://ibrprojects.ibrgc.com/mailapi/Service/sendemail', leaveRequest);
  }
}
