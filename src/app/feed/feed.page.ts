import { Component } from '@angular/core';
 
@Component({
 selector: 'app-feed',
 templateUrl: 'feed.page.html',
 styleUrls: ['feed.page.scss']
})
export class FeedPage {
 private icons = [
   
 ];
 public items: Array<{ title: string; icon: string }> = [];
 public allItems: Array<{ title: string; icon: string }> = [];
 
 constructor() {
   for (let i = 0; i < this.icons.length; i++) {
     this.items.push({
       title: this.icons[i].charAt(0).toUpperCase() + this.icons[i].slice(1),
       icon: this.icons[i]
     });
   }
   this.allItems = this.items;
 }
 
 onSearchTerm(ev: CustomEvent) {
   this.items = this.allItems;
   const val = ev.detail.value;
 
   if (val && val.trim() !== '') {
     this.items = this.items.filter(term => {
       return term.title.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
     });
   }
 }
}
 
 
