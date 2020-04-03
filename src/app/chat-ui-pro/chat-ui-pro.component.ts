import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
interface mgsBody{
  msg:string;
  image:string;
  type:string;
  cid:string;
  sender:string;
  child:{
    msg:string;
    image:string;
    type:string;
    cid:string;
    sender:string;
  };
}
@Component({
  selector: 'app-chat-ui-pro',
  templateUrl: './chat-ui-pro.component.html',
  styleUrls: ['./chat-ui-pro.component.css']
})
export class ChatUiProComponent implements OnInit {

  chatMsgList:mgsBody[]=new Array();
  MsgData:any=[];
  constructor(private api:APIServiceService) { }

  ngOnInit() {

    this.getWelcomeMsg();
  }

  getWelcomeMsg()
  {
    this.api.getWelcomeMsg().subscribe(value=>{
     
      this.MsgData=value;
      
    // this.MsgData.push(this.chatMsgList);
     console.log(this.MsgData[0].child.length);
      this.chatMsgList=this.MsgData;
     console.log(this.chatMsgList);
    
      
    })
  
}

choice(ch:any)
{
  console.log(ch);
  this.api.getChoiceReplyPro(ch).subscribe(value=>{
    console.log(value);
  })
}

}
