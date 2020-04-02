import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AppLaunchPageComponent } from './app-launch-page/app-launch-page.component';

const routes: Routes = [
  {path:"chatbox",component:ChatBoxComponent},
  {path:"home",component:AppLaunchPageComponent},
  {path:"",component:AppLaunchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
