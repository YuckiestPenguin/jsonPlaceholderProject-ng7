import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getPosts()
      .subscribe(res => {
        this.posts = res;
        console.log(this.posts);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
