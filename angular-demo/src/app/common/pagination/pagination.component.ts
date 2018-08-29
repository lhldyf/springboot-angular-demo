import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Table } from '../../table';
import { Pagination } from '../../pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() table: Table<any>;
  @Input() page: Pagination<any>;

  pagesIndexes: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(changes['page']) {
      let pagesIndexes_: number[] = [];
      for(let i = 0 ; i < this.page.totalPages; i++) {
        pagesIndexes_.push(i+1);
      }
      this.pagesIndexes = pagesIndexes_;
    }
  }

  fetchPageNumber(pageNum: number) {
    this.table.fetchPage(pageNum - 1, this.page.size);
  }

  fetchPreviousPage(): void {
    if(this.page.number == 0) {
      return;
    }

    this.table.fetchPage(this.page.number-1, this.page.size).subscribe();
  }

  fetchNextPage(): void {
    if(this.page.number+1 >= this.page.totalPages){
      return;
    }

    this.table.fetchPage(this.page.number+1, this.page.size).subscribe();
  }

}
