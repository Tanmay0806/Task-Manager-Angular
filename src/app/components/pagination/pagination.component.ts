import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 0; 
  @Input() itemsPerPage: number = 10; 
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>(); 
  currentPage: number = 1;
  totalPages: number = 0;

  ngOnInit(): void {
    this.updateTotalPages();
  }

  ngOnChanges(): void {
    this.updateTotalPages(); 
  }

  updateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this .pageChange.emit(this.currentPage);
    }
  }

  handleFirstPage() {
    this.goToPage(1);
  }

  handlePrevPage() {
    this.previousPage();
  }

  handleNextPage() {
    this.nextPage();
  }

  handleLastPage() {
    this.goToPage(this.totalPages);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}