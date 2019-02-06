import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';
/**
 * Generated class for the ExportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-export',
  templateUrl: 'export.html',
})
export class ExportPage {
  members = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.members =[{
      "Name": "Sidibe carelle",
      "EmailId": "carelle.sidibe@yahoo.fr",
      "ContactNo": "+23523435322",
      "Gender": "Man",
      "ProfileVerified": "Verified",
      "JobSought": "Decorator",
      "PublishedDate": "1/2/2019 12:48:07 PM",
      "MemberType": "Candidate",
      "Job": null,
      "ProfileStatus": false,
      "Age": "NA"
    },
    {
      "Name": "Tanguy Roussel",
      "EmailId": "Tanguy@gmail.com",
      "ContactNo": "+22508667543",
      "Gender": "Man",
      "ProfileVerified": "Verified",
      "JobSought": "Nanny",
      "PublishedDate": "1/28/2019 6:26:48 AM",
      "MemberType": "Employer",
      "Job": null,
      "ProfileStatus": false,
      "Age": "23"
    },
    {
      "Name": "Valérie Koffi",
      "EmailId": "valerie@gmail.com",
      "ContactNo": "0102030405",
      "Gender": "Woman",
      "ProfileVerified": "Verified",
      "JobSought": "Nanny",
      "PublishedDate": "12/2/2018 6:36:14 PM",
      "MemberType": "Candidate",
      "Job": null,
      "ProfileStatus": false,
      "Age": "NA"
    },
    {
      "Name": "Valérie Koffi",
      "EmailId": "valerie@gmail.com",
      "ContactNo": "0102030405",
      "Gender": "Woman",
      "ProfileVerified": "Verified",
      "JobSought": "Cook",
      "PublishedDate": "12/2/2018 6:38:09 PM",
      "MemberType": "Candidate",
      "Job": null,
      "ProfileStatus": false,
      "Age": "NA"
    },
    {
      "Name": "Yann Gbagbo",
      "EmailId": "Yann@yahoo.com",
      "ContactNo": "0906050203",
      "Gender": "Man",
      "ProfileVerified": "Not Verified",
      "JobSought": "Nanny",
      "PublishedDate": "12/2/2018 7:18:23 PM",
      "MemberType": "Candidate",
      "Job": null,
      "ProfileStatus": false,
      "Age": "NA"
    },
    {
      "Name": "Yao francois",
      "EmailId": "francois.yao@yahoo.fr",
      "ContactNo": "+23524455734",
      "Gender": "Man",
      "ProfileVerified": "Verified",
      "JobSought": "Decorator",
      "PublishedDate": "12/9/2018 11:12:56 PM",
      "MemberType": "Candidate",
      "Job": null,
      "ProfileStatus": false,
      "Age": "27"
    },
    {
      "Name": "Yao francois",
      "EmailId": "francois.yao@yahoo.fr",
      "ContactNo": "+23524455734",
      "Gender": "Man",
      "ProfileVerified": "Verified",
      "JobSought": "Decorator",
      "PublishedDate": "12/9/2018 11:18:25 PM",
      "MemberType": "Candidate",
      "Job": null,
      "ProfileStatus": false,
      "Age": "27"
    },
    {
      "Name": "You Ya",
      "EmailId": "You@gamail.com",
      "ContactNo": "83838282",
      "Gender": "Man",
      "ProfileVerified": "Verified",
      "JobSought": "Nanny",
      "PublishedDate": "12/26/2018 7:08:10 PM",
      "MemberType": "Candidate",
      "Job": null,
      "ProfileStatus": false,
      "Age": "21"
    }
  ]

  this.members.forEach(element => {
    element.PublishedDate = moment(element.PublishedDate).format("DD MMM YYYY");
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExportPage');
  }

}
