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
import { AppRoutingModule } from './routing/app-routing.module';
import { CreateUserProfileComponent } from './profile/create-user-profile/create-user-profile.component';
import { SelectBuildComponent } from './profile/select-build/select-build.component';

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
  },
  {
    path: 'add-character',
    component: CreateUserProfileComponent
  },
  {
    path: 'build/select',
    component: SelectBuildComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    ArmouryComponent,
    UserProfileComponent,
    UserProfileDetailComponent,
    CreateUserProfileComponent,
    SelectBuildComponent
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
