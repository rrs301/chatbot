import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { APIServiceService } from '../apiservice.service';

interface chatMsg{
  msg:string;
  type:string;
  sender:string;
}
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  title = 'ChatBotApp';
  chatMsgList:chatMsg[]=new Array();
  BotMsg:any=[];
  msg:string
  tempList:any=[];
   temp="Rahul\nSanap"; 
  // @ViewChild('content') content:any;
  // container: HTMLElement; 

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  container: HTMLElement; 
  constructor(public firebaseAPI:APIServiceService,http:HttpClient) {
   
   
    
   }

  ngOnInit() {
    
    
    // this.temp="Rahul\nSanap".replace(new RegExp('\/n', 'g'), '<br/>');
    // console.log(this.temp);
    this.firebaseAPI.getCollectionMsg().subscribe(val=>{
      this.BotMsg=val[0];
      this.chatMsgList.push(
        {
          msg: this.BotMsg.msg,
          type:this.BotMsg.type,
          sender:"bot",
        }
      );
      console.log(this.chatMsgList);

    })
   // this.scrollToBottom();
  }

  sendMsg(msg:string)
  {
      console.log(msg);
      this.msg="";
      this.chatMsgList.push({
        msg: msg,
        type:"text",
        sender:"user",
      })
     // this.scrollToBottom();
      this.getChatBotChoiceMsg(msg);
  }

  getChatBotChoiceMsg(choice:string)
  {
      this.firebaseAPI.getChoiceReply(choice).subscribe(val=>{
        this.BotMsg=val;
        console.log(this.BotMsg[0].msg);
        this.chatMsgList.push(
          {
            msg: this.BotMsg[0].msg,
            type:this.BotMsg[0].type,
            sender:"bot",
          }
        );

      })
      console.log(this.chatMsgList);
     this.scrollToBottom();
  }

  ngAfterViewChecked() {
    // Called every time the view changes        
    this.scrollToBottom();        
} 

  scrollToBottom() {
    
    window.scrollTo(0,document.body.scrollHeight);
    this.container = document.getElementById("temp");  
  //   console.log(this.container.scrollHeight);  
  //   this.container.scrollTop = this.container.scrollHeight; 
  //   console.log(this.container);

  //   try {
  //     this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  //     console.log(this.myScrollContainer.nativeElement.scrollHeight);
  // } catch(err) { } 
   }
}
