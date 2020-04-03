import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AppLaunchPageComponent } from './app-launch-page/app-launch-page.component';
import { ChatUiProComponent } from './chat-ui-pro/chat-ui-pro.component';

const routes: Routes = [
  {path:"chatbox",component:ChatBoxComponent},
  {path:"home",component:AppLaunchPageComponent},
  {path:"chatboxpro",component:ChatUiProComponent},
  {path:"",component:AppLaunchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
