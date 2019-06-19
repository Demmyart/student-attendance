import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe }from './shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MyDatePickerModule } from 'angular4-datepicker/src/my-date-picker';
import { environment } from '../environments/environment';
import { SortPipe } from './shared/sort.pipe';

import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './ngrx/effects/effects';
import {reducers} from './ngrx/index'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { GooglePieChartService } from './googlecharts/google-pie-chart-service.service';
import {RequestService} from './shared/request.service';
import {AuthService} from './shared/auth.service';
import {AdminguardService} from './shared/guards/adminguard.service'
import {AuthguardService} from './shared/guards/authguard.service';
import {TeacherguardService} from './shared/guards/teacherguard.service';
import {StudentguardService} from './shared/guards/studentguard.service';
import {CommonService} from './shared/common.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SearchComponent } from './search/search.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ResultsComponent } from './results/results.component';
import { SignupComponent } from './signup/signup.component';
import { LessonInfoComponent } from './lesson-info/lesson-info.component';
import { SearchByGroupResultComponent } from './search-by-group-result/search-by-group-result.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonliststudentComponent } from './studentworkspace/lessonliststudent/lessonliststudent.component';
import { StatforstudentComponent } from './studentworkspace/statforstudent/statforstudent.component';
import { PieChartComponent } from './googlecharts/pie-chart-component/pie-chart-component.component';
import { GlobalService } from './shared/global.service';
import { TotalstatComponent } from './adminworkspace/totalstat/totalstat.component';
import { NewsComponent } from './news/news.component';
import { StatforgroupComponent } from './statforgroup/statforgroup.component';



const itemRoutes: Routes = [
  { path: 'admin', component: TotalstatComponent, canActivate: [AdminguardService]},
  { path: 'student', component: LessonliststudentComponent, canActivate: [StudentguardService]},
  { path: 'teacher', component: LessonListComponent, canActivate: [TeacherguardService]},
  { path: 'LessonliststudentComponent', component: LessonliststudentComponent, canActivate: [StudentguardService]},
  { path: 'LessonListComponent', component: LessonListComponent, canActivate: [TeacherguardService]},
  { path: 'LessonInfoComponent', component: LessonInfoComponent, canActivate: [TeacherguardService]},
  { path: 'StatforstudentComponent', component: StatforstudentComponent, canActivate: [StudentguardService]},
  { path: 'SearchByGroupResultComponent', component: SearchByGroupResultComponent, canActivate: [TeacherguardService]},
  { path: 'StatforgroupComponent', component: StatforgroupComponent, canActivate: [TeacherguardService]}
];	

const appRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: 'workspace', component: WorkspaceComponent, canActivate: [AuthguardService],children: itemRoutes}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserinfoComponent,
    WorkspaceComponent,
    SearchComponent,
    CalendarComponent,
    ResultsComponent,
    SignupComponent,
    LessonInfoComponent,
    SearchByGroupResultComponent,
    LessonListComponent,
    FilterPipe,
    LessonliststudentComponent,
    StatforstudentComponent,
    PieChartComponent,
    TotalstatComponent,
    NewsComponent,
    SortPipe,
    StatforgroupComponent,
    
  ],
  imports: [
BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MyDatePickerModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument  ({
      maxAge:20
    })
  ],
  
  providers: [
  {provide: "apiBase", useValue: environment.apiBase},
  RequestService,AuthService,CommonService,
  AuthguardService,TeacherguardService,AdminguardService, StudentguardService,
  GooglePieChartService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
