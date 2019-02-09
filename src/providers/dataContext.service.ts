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
        return this._http.post(this.commonService.getApiControllerName("makeJobOfferAsFavourite").toString() + "/" + userId + "/FavouriteJobOffers/" + jobOfferId, "")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Delete selected job offer from favourite
    DeleteFavourite = (userId: number, jobOfferId: number): Observable<any> => {
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
    GetMyFavouriteOffers = (userId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getMyFavouriteOffers").toString() + "/" + userId + "/FavouriteJobOffers/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    //Get job request details
    GetJobRequestDescription = (jobRequestId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getPublishedJobRequestByJobId").toString() + "/" + jobRequestId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get job response details
    GetJobResponseDescription = (jobResponseId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getPublishedJobResponseByJobId").toString() + "/" + jobResponseId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Create New job request
    CreateNewJobRequest = (userData: any): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("createNewJobRequest").toString() + "/" + userData.CandidateId + "/JobRequests", userData)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Create New job response
    CreateNewJobResponse = (userData: any): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("createNewJobResponse").toString() + "/" + userData.CandidateId + "/JobRequests", userData)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //get job task based on job id
    GetJobTasks = (jobId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getJobTasks").toString() + "?jobId=" + jobId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get all my saved job request
    GetMySavedJobRequest = (candidateId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getMySavedJobRequest").toString() + "/" + candidateId + "/JobRequests")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get all my saved job request
    GetActiveCities = (countryId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getActiveCities").toString() + "?countryId=" + countryId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get all my saved job request
    GetActiveDistricts = (cityId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getActiveDistricts").toString() + "?cityId=" + cityId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Delete selected job request
    DeleteJobRequest = (candidateId: number, jobRequestId: number, ): Observable<any> => {
        return this._http.delete(this.commonService.getApiControllerName("deleteJobRequest").toString() + "/" + candidateId + "/JobRequests/" + jobRequestId)
            .map((response: any) => response.json())
            .catch(this._http.handleError);
    }

}