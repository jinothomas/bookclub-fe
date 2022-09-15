import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { AddBook } from '../../actions/book-actions';
import { Book } from '../../states/book-states';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent {

  closeResult = '';
  bookid: string = "";
  name: string = "";
  author: string = "";
  version: string = "";
  yearofrelease: string = "";
  yearofrevision: string = "";
  price: string = "";
  publisher: string = "";

  constructor(private modalService: NgbModal, private store: Store) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addBook() {
    const book: Book = {
      bookid: this.bookid,
      name: this.name,
      author: this.author,
      version: this.version,
      yearofrelease: this.yearofrelease,
      yearofrevision: this.yearofrevision,
      price: this.price,
      publisher: this.publisher
    }
    this.store.dispatch(new AddBook(book));
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
