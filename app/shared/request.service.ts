import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Student } from './student';
import { environment } from './../../environments/environment';
import { User } from './../ngrx/models/user';

@Injectable()
export class RequestService {

  student: Student[] = [];
  // apiUrl  = environment.apiBase;

  constructor(
    private http:HttpClient,
    @Inject("apiBase") private apiUrl: string ) {}

  public scheduleData : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  // scheduleData1: Observable<any> = this.scheduleData.asObservable();
  // public searchList : BehaviorSubject<any> = new BehaviorSubject<any>(null);


//РАСПИСАНИЕ ПРЕПОДАВАТЕЛЯ
  getScheduleList(model:any): Observable<any>{
    return this.http.post(this.apiUrl + 'schedule',model)
      // .map(data=>{
      //   this.scheduleData.next(data);
        // this.scheduleData = response.json();
      // });
  }


// ИНФО ПО ПАРЕ
  getLessonInfo(model:any): Observable<any>{
    return this.http.post(this.apiUrl + 'lessoninfo',model)
  };
  

// ЗАГРУЗКА ФОТО В БАЗУ
  sendPhoto(fileToUpload: File, id_schedule:any): Observable<boolean> {
    const endpoint = this.apiUrl + 'sendphoto';
    const formData: FormData = new FormData();
    formData.append('File', fileToUpload, fileToUpload.name);
    formData.append('id_schedule',id_schedule);
    return this.http.post(endpoint, formData)
    .map(data => { 
      return true; 
    });
  }

  // ЗАГРУЗКА РАСПИСАНИЯ В БАЗУ
  sendSchedule(fileToUpload: File): Observable<any> {
    const endpoint = this.apiUrl + 'sendSchedule';
    const formData: FormData = new FormData();
    formData.append('File', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData)
  }

//ОТМЕТКА О ПРИСУТСТВИИ
  studentIsHere(model:any): Observable<any>{
    return this.http.post(this.apiUrl +'studentishere',model)
  }

  //ПОИСК ПО ГРУППЕ - СПИСОК ПРЕДМЕТОВ
  searchByGroup(model:any): Observable<any>{
    return this.http.post(this.apiUrl +'searchbygroups',model)
  }

//СТАТИСТИКА ГРУППЫ ПО ПРЕДМЕТУ
  getstatbygroup(model:any): Observable<any>{
    return this.http.post(this.apiUrl + 'getstatbygroup',model)
  }
  

  // РАПИСАНИЕ СТУДЕНТА
  getScheduleStudent(model:any): Observable<any>{
    return this.http.post(this.apiUrl + 'schedulestudent',model)
  }

  
// СТАТИСТИКА СТУДЕНТА ПО ВЫБРАННОЙ ПАРЕ
getstatforstudent(model:any): Observable<any>{
  return this.http.post(this.apiUrl + 'getstatforstudent',model)
}


// СТАТИСТИКА ОБЩАЯ
getstatforadmin(){
  return this.http.get(this.apiUrl + 'getTotalStat')
}

//  АУДИТОРИИ
getaud(){
  return this.http.get(this.apiUrl + 'getByAud')
}

// API NEWS
getNews(){
  return this.http.get('https://newsapi.org/v2/everything?'+'q=(кфу)&' + 'pageSize=3&'+
  'apiKey=d4a8c23c9ed648e4818379e105e39587')
}


}
