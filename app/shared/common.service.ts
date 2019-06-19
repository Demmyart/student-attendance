import { Injectable, Injector } from '@angular/core';
import {RequestService} from '../shared/request.service';
import {Student} from '../shared/student';

@Injectable()
export class CommonService {

Student: Student[];

constructor(private injector: Injector) { }

// getData(model:any){

  // const type = sadas;
  
  // switch(type){
  //   case 'Student': 
  //     this.injector.get(RequestService);
  //     const student = new Student(model);
  //     this.Student.push(student);
  //     return this.Student;

    // case 'Teacher':
    //   this.injector.get(RequestService);
    //   const teacher = new Teacher(model);
    //   this.Teacher.push(teacher);
    //   return this.Teacher;
  // }
}




