import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  currentPage = input<number>(1);
  totalItems = input<number>(200);
  start: number = 0;
  end: number = 5;
  pages: number[] = [];

  ngOnInit(): void {
    this.pages = Array.from(
      { length: this.totalItems() },
      (_, index) => index + 1
    );
  }
  nextStep() {
    if (this.end < this.totalItems()) {
      this.start += 5;
      this.end += 5;
    }
  }
  prevStep() {
    if (this.start > 0) {
      this.start -= 5;
      this.end -= 5;
    }
  }
}
