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
     // console.log(this.chatMsgList);
     this.MsgData.push(this.chatMsgList);

    //  this.chatMsgList.pipe(map(value=>{
    //    console.log(value);
    //  })).subscribe();

    for(let i=0;i<this.MsgData.length-1;i++)
    {
      // console.log(this.chatMsgList[i]);
        this.chatMsgList.push({
        msg:this.MsgData[i].msg,
        image:this.MsgData[i].image,
        type:this.MsgData[i].type,
        cid:this.MsgData[i].cid,
        sender:"bot",
      })
    }

      console.log(this.chatMsgList);
      
    })
  }

}
