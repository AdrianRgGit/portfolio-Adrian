import { Component, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faArrowDown = faArrowDown;

  textList: string[] = [
    'Front Developer',
    'Back Developer',
    'Api creator',
    'Basketball player',
  ];

  currentIndex: number = 0;
  currentText: string = this.textList[0];

  ngOnInit() {
    interval(3000).subscribe(() => this.changeText());
  }

  changeText() {
    this.currentIndex = (this.currentIndex + 1) % this.textList.length;
    
      this.currentText = this.textList[this.currentIndex];
      document.querySelector('.dynamic-text')?.classList.add('hidden');
      setTimeout(() => {
        document.querySelector('.dynamic-text')?.classList.remove('hidden');
      }, 2000);

  }
}
