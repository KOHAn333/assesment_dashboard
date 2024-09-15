import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { StudAttComponent } from './components/stud-att/stud-att.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { CardComponent } from './components/card/card.component';
import { SectionchartsComponent } from './components/sectioncharts/sectioncharts.component';
@NgModule({
  declarations: [AppComponent,CourseComponent,AssessmentComponent,StudAttComponent, CardComponent, SectionchartsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,NgApexchartsModule,MatListModule,FormsModule,MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
