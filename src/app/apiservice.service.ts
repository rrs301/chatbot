import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(public http:HttpClient) { }
  getCollectionMsg()
  {
    //return this.fireStore.collection("covid19").valueChanges();
    return  this.http.get("http://playbox99.com/chatbot/getAllMsg.php")
  }

  getChoiceReply(choice:string)
  {
    // return this.fireStore.collection("covid19").doc("bTtSceX182p5QKLKTo8y").collection("choice")
    // .doc(choice).valueChanges();

    return this.http.get("http://playbox99.com/chatbot/getChoice.php?userMsg="+choice);
    
  }

  getWelcomeMsg()
  {
    return this.http.get("http://infobot.playbox99.com/script/getWelcomeMsg.php")
  }
  getChoiceReplyPro(choice:string)
  {
    return this.http.get("http://infobot.playbox99.com/script/getChoiceReply.php?sid="+choice);
    
  }
}
