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
  timerSeconds: number = 0;
  timer: string = '00:00:00';
  ngOnInit() {
      // this.updateTime();
      // Update time every minute
      // this.intervalId = setInterval(() => {
      //   this.updateTime();
      // }, 60000);
     
      
  }
  
  ngOnDestroy() {
      // if (this.intervalId) {
      //   clearInterval(this.intervalId);
      // }
    // clearInterval(this.intervalId);
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
    this.intervalId = setInterval(() => {
      this.timerSeconds++;
      this.timer = this.timerSecondsToTime(this.timerSeconds);
    }, 1000);
  }

  checkOut() {
    this.isCheckedIn = false;
    this.checkInTime = null;
    this.updateTodayHours();
    clearInterval(this.intervalId);
  }
  timerSecondsToTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600) > 9 ? Math.floor(seconds / 3600) : `0${Math.floor(seconds / 3600)}`;
    const minutes = Math.floor((seconds % 3600) / 60) > 9 ? Math.floor((seconds % 3600) / 60) : `0${Math.floor((seconds % 3600) / 60)}`;
    const remainingSeconds = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
    return `${hours}:${minutes}:${remainingSeconds}`;
  }
  getCurrentTime(): string {
    return this.currentTime || new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }

  updateTodayHours() {
    if (!this.timerSeconds) {
      this.todayHours = '00:00:00';
      return;
    }
    const hours = Math.floor(this.timerSeconds / (1000 * 60 * 60)) > 9 ? Math.floor(this.timerSeconds / (1000 * 60 * 60)) : `0${Math.floor(this.timerSeconds / (1000 * 60 * 60))}`;
    const minutes = Math.floor((this.timerSeconds % (1000 * 60 * 60)) / (1000 * 60)) > 9 ? Math.floor((this.timerSeconds % (1000 * 60 * 60)) / (1000 * 60)) : `0${Math.floor((this.timerSeconds % (1000 * 60 * 60)) / (1000 * 60))}`;
    this.todayHours = `${hours}:${minutes}`;
  }

  getTodayHours(): string {
    return this.todayHours;
  }

  getWeekHours(): string {
    // Placeholder - you can implement actual week calculation
    return '40h 0m';
  }
 
}
