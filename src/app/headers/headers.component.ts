import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,PostsComponent],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent implements OnInit{
users:User[]=[]
selecteduser!:User
form!:FormGroup
constructor(private fb:FormBuilder,private userService:UserService){}


ngOnInit(): void {
  this.form= this.fb.group({
    username:this.fb.control(null,Validators.required)
  })
  this.userService.getUsers().subscribe(user=>{
    this.users=user
  })
  this.form.get('username')?.valueChanges.subscribe(id =>{
    if(id){
      this.userService.getUser(id).subscribe((selecteduser: User)=>{
        this.selecteduser=selecteduser;
        console.log(selecteduser)
      });
    }
   
  })
}
}
