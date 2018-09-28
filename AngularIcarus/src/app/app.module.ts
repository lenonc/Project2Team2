import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuildComponent } from './build/build/build.component';
import { ArmouryComponent } from './build/armoury/armoury.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { UserProfileDetailComponent } from './profile/user-profile-detail/user-profile-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './routing/app-routing.module';

const routes=[
  {
    path: '',
    redirectTo: '/armoury',
    pathMatch: 'full'
  },
  {
    path:'armoury',
    component: ArmouryComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'character/:id',
    component: UserProfileDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    ArmouryComponent,
    UserProfileComponent,
    UserProfileDetailComponent,
    MessagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
