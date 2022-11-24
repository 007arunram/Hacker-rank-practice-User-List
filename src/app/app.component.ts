import {Component} from '@angular/core';
import {Item} from "../types/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Book: string = 'Book';
  Song: string = 'Song';
  dataListBooks: any = [];
  dataListSongs: any = [];

  constructor() {

  }

  ngOnInit() {

  }

  onItemAdded(item) {
    if(item.type === this.Book){
      this.dataListBooks.push(item)
    }else{
      this.dataListSongs.push(item)
    }
  }


  onItemDelete(item) {
    if(item.type === this.Book){
      this.dataListBooks.splice(item, 1)
    }else{
      this.dataListSongs.splice(item, 1)
    }
  }

  displayCounter(count) {
    console.log(count);
}


  
}
