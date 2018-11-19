import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  data: Post[] = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getPosts()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      }, err => {
        console.log(err);
      });
  }

}
