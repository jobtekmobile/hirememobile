import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from "./http.service";
import { Observable } from 'rxjs/Rx';
import { CommonServices } from "./common.service";

@Injectable()
export class DataContext {
    constructor(
        public events: Events,
        public storage: Storage,
        private _http: HttpService,
        private commonService: CommonServices
    ) { }

    //Login
    UserLogin = (userData: any): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("userLogin").toString(), "")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get Active search categories
    GetActiveCategories = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getActiveCategories").toString())
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get Active job request by job id
    GetPublishedJobRequestByJobId = (filterData: any): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getPublishedJobRequestByJobId").toString() + "?job=" + filterData.Job)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get Active job response by job id
    GetPublishedJobReponseByJobId = (filterData: any): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getPublishedJobResponseByJobId").toString() + "?job=" + filterData.Job)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Make selected job request as favourite
    MakeJobOfferAsFavourite = (userId: number, jobOfferId: number): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("makeJobOfferAsFavourite").toString() + "/" + userId + "/FavouriteJobOffers/" + jobOfferId,"")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Delete selected job offer from favourite
    DeleteFavourite=(userId: number, jobOfferId: number): Observable<any> => {
        return this._http.delete(this.commonService.getApiControllerName("deleteFavourite").toString() + "/" + userId + "/FavouriteJobOffers/" + jobOfferId)
            .map((response: any) => response.json())
            .catch(this._http.handleError);
    }

    //Get active notification details by user id
    GetActiveNotificationByUserId = (userId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getNotification").toString() + "/" + userId + "/Notifications/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get all my favourite offers
    GetMyFavouriteOffers= (userId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getMyFavouriteOffers").toString() + "/" + userId + "/FavouriteJobOffers/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
}