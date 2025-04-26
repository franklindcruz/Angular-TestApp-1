import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rectColor = '';
  rectWidth = 150;
  rectHeight = 150;
  rotationAngle = 0;

  changeColor(color: string) {
    this.rectColor = color;
  }
  adjustHeight(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rectHeight = +input.value;
  }
  adjustWidth(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rectWidth = +input.value;
  }
  rotateRectangle(direction: string) {
    if (direction === 'rightRotation') {
      this.rotationAngle += 10;
    } else if (direction === 'leftRotation') {
      this.rotationAngle -= 10;
    }
  }
}
