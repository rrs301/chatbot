import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { AppLaunchPageComponent } from './app-launch-page/app-launch-page.component';
import { ChatUiProComponent } from './chat-ui-pro/chat-ui-pro.component';
@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    TitleBarComponent,
    AppLaunchPageComponent,
    ChatUiProComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  exports:[
    ChatBoxComponent,
    TitleBarComponent,
    AppLaunchPageComponent,
    ChatUiProComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
