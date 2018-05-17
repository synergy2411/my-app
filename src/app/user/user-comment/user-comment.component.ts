import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  @Input('comments') comments : Comment[] ;
  newComment : Comment;

  addNewComment(form : NgForm){
    console.log(form);
    this.newComment = {
      stars : form.value.stars,
      author : form.value.author,
      body : form.value.body
    }
    console.log("Comments " + this.newComment);
    this.comments.push(this.newComment);
    form.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
