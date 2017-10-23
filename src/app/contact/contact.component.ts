import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  name:string;
  email:string;
  message:string;
  sucess:boolean;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.sucess = false;
  }

  sendMessage() {
    this.afs.collection('message').add({'name': this.name, 'email': this.email, 'message': this.message});
    this.sucess = true;
  }

}
