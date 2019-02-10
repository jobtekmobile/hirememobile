import { Platform, NavParams, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-jobrequestnote',
  templateUrl: 'jobrequestnote.html'
})
export class JobRequestNotePage {
  requestInfo:any = {};
  userId:any = "";
  showType:string = "list_section"
  craeteNoteObj = new CreateNote();
  noteLists:Array<any> = [];
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public _dataContext: DataContext, private commonService: CommonServices
  ) {
    this.showType = "list_section";
    this.requestInfo = this.navParams.get('info');
    this.userId = this.navParams.get('userId');
    this.getNoteList();
  }
  getNoteList(){

    this._dataContext.GetNotesforJobRequest(this.userId,this.requestInfo.JobRequestId)
    .subscribe(response => {
      if (response.length > 0) {
        this.noteLists = response;
      }
      else
        this.commonService.onMessageHandler("No Notes found.", 0);
    },
      error => {
        this.commonService.onMessageHandler("Failed to retrieve Notes. Please try again", 0);
      });
  }
  
  dismiss() {
    this.viewCtrl.dismiss(false);
    
  }
  createNote(){
      this.showType = "create_section";
  }
  cancelCreate(){
    this.showType = "list_section";
  }
  saveNote(){
   
    this._dataContext.SaveNotesforJobRequest(this.craeteNoteObj,this.userId,this.requestInfo.JobRequestId)
    .subscribe(response => {
     
        this.commonService.onMessageHandler(response, 1);
        this.showType = "list_section";
        this.getNoteList();
    },
      error => {
        this.commonService.onMessageHandler("Failed to retrieve Notes. Please try again", 0);
      });
  }
}
class CreateNote{
  StarRating:number;
  Note:string = "";
}




