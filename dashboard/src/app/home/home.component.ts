import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
// The Endpoint For The Form data sent (API_URL: 'https://ibrprojects.ibrgc.com/mailapi/Service/sendemail')
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  isCheckedIn: boolean = false;
  checkInTime: Date | null = null;
  currentTime: string = '';
  todayHours: string = '0h 0m';
  private intervalId: any;

  ngOnInit() {
    // this.updateTime();
    // // Update time every minute
    // this.intervalId = setInterval(() => {
    //   this.updateTime();
    // }, 60000);
  }

  ngOnDestroy() {
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    // }
  }

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    this.updateTodayHours();
  }

  checkIn() {
    this.isCheckedIn = true;
    this.checkInTime = new Date();
    this.updateTodayHours();
  }

  checkOut() {
    this.isCheckedIn = false;
    this.checkInTime = null;
    this.todayHours = '0h 0m';
  }

  getCurrentTime(): string {
    return this.currentTime || new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }

  updateTodayHours() {
    if (!this.isCheckedIn || !this.checkInTime) {
      this.todayHours = '0h 0m';
      return;
    }
    const now = new Date();
    const diff = now.getTime() - this.checkInTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.todayHours = `${hours}h ${minutes}m`;
  }

  getTodayHours(): string {
    return this.todayHours;
  }

  getWeekHours(): string {
    // Placeholder - you can implement actual week calculation
    return '40h 0m';
  }
}
