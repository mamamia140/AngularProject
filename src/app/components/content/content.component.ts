import { Component, OnInit } from '@angular/core';
import {Courses} from '../../model/Courses'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  dept: string;
  courses: Courses[];
  constructor(){
    this.dept = "Informatics";
    this.courses = [new Courses("1ik161", "Fundamentals of Programming",7.5),
  new Courses("1ik162","Ders",5)]
  }

  ngOnInit(): void {
    
  }


}
