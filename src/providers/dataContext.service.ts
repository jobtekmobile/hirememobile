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

    ////////////////////////////////////////Agency////////////////////////////////

    GetMyCandidatesForAgency = (agencyId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getMyCandidates").toString() + "/" + agencyId + "/Candidates/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    GetMyJobRequestsForAgency = (agencyId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getMyJobRequestsForAgency").toString() + "/" + agencyId + "/JobRequests/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    /////////////////////////////////////////////////////////////////////////////////

    CandidateProfileById = (userId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getProfileDetails").toString() + "/" + userId + "/MyProfile/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }


    getCountries = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getCountries").toString() + "/GetCountries/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    // "?job=" + 
    getCities = (countryId): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getCities").toString() + "/GetCities/?countryId=" + countryId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    getDistricts = (cityId): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getDistricts").toString() + "/GetDistricts/?cityId=" + cityId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    updateProfile = (profileId, profileObj): Observable<any> => {
        return this._http.put(this.commonService.getApiControllerName("updateCandidateProfile").toString() + "/" + profileId + "/MyProfile/?candidateId=" + profileId, profileObj)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    //////////////////////////////////////Admin/////////////////////////////////////////////////////
    GetJobOfferCountsForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getJobOfferCountsForAdmin").toString() + "/GetJobOfferCounts/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    GetJobOfferDoughnotDataForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getJobOfferDoughnotDataForAdmin").toString() + "/GetJobOfferDoughnotData/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    GetJobRequestCountsForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getJobRequestCountsForAdmin").toString() + "/GetJobRequestCounts/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    GetJobRequestDoughnotDataForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getJobRequestDoughnotDataForAdmin").toString() + "/GetJobRequestDoughnotData/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }


    GetUnverifiedAgenciesForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getUnverifiedAgenciesForAdmin").toString() + "/UnverifiedAgencies/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    ActivateAgency = (agencyId: number): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("activateAgency").toString() + "/ActivateAgency/" + agencyId, "")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    GetUnverifiedJobRequestsForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getUnverifiedJobRequestsForAdmin").toString() + "/UnverifiedJobRequests/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    ValidateJobRequest = (jobRequestId: number): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("validateJobRequest").toString() + "/VerifyJobRequest/" + jobRequestId, "")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    GetUnverifiedJobOffersForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getUnverifiedJobOffersForAdmin").toString() + "/UnverifiedJobOffers/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    ValidateJobOffer = (jobOfferId: number): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("validateJobOffer").toString() + "/VerifyJobOffer/" + jobOfferId, "")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    GetUnVerifiedEmployersForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getUnVerifiedEmployersForAdmin").toString() + "/UnverifiedEmployers/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    ActivateEmployer = (employerId: number): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("activateEmployer").toString() + "/ActivateEmployer/" + employerId, "")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    GetUnverifiedCandidatesForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getUnverifiedCandidatesForAdmin").toString() + "/UnverifiedCandidates/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    ActivateCandidate = (candidateId: number): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("activateCandidate").toString() + "/ActivateCandidate/" + candidateId, "")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    SearchMembersForAdmin= (searchParam: any): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("searchMembersForAdmin").toString() + "/SearchMembers/", searchParam)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    ExportMembersToExcelForAdmin = (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("exportMembersToExcelForAdmin").toString() + "/ExportMembersToExcel/")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

    GetJobOfferDescription = (jobOfferId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getJobOfferDescriptionById").toString() + "/" + jobOfferId)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    GetJobs= (): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getJobs").toString() + "/GetJobs")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////

    LoginUser = (login: any): Observable<any> => {
        return this._http.post(this.commonService.getApiControllerName("loginUser").toString() + "/Login/", login)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Search job request using filter
    GetSearchPublishedJobRequest = (searchObj: any): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getSearchPublishedJobRequest").toString() + searchObj)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Search job offer using filter
    GetSearchPublishedJobOffer = (searchObj: any): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getSearchPublishedJobResponse").toString() + searchObj)
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get Fav job request for employer
    GetMyFavJobRequestForEmployer = (employerId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getMyFavJobRequestForEmployer").toString() + "/" + employerId + "/FavouriteJobRequests")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get employer job offer by employee id
    GetMyJobOfferForEmployee = (employerId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getMyJobOfferForEmployee").toString() + "/" + employerId + "/JobOffers")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //delete employer job offer by employee id and job request id
    DeleteFavouriteJobRequestForEmployee = (employerId: number, jobRequestId: number): Observable<any> => {
        return this._http.delete(this.commonService.getApiControllerName("deleteFavouriteJobRequestForEmployee").toString() + "/" + employerId + "/FavouriteJobRequests/" + jobRequestId)
            .map((response: any) => response.json())
            .catch(this._http.handleError);
    }
    //delete employer job offer by employee id and job offer id
    DeleteEmployerJobOffer = (employerId: number, jobOffertId: number): Observable<any> => {
        return this._http.delete(this.commonService.getApiControllerName("deleteEmployerJobOffer").toString() + "/" + employerId + "/FavouriteJobOffers/" + jobOffertId)
            .map((response: any) => response.json())
            .catch(this._http.handleError);
    }
    //Get employer profile details
    GetEmployerProfileDetails = (employerId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getEmployerProfileDetails").toString() + "/" + employerId + "/MyProfile")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }
    //Get employer notification details
    GetEmployerNotificationDetails = (employerId: number): Observable<any> => {
        return this._http.get(this.commonService.getApiControllerName("getEmployerNotificationDetails").toString() + "/" + employerId + "/Notifications")
            .map((response: Response) => response.json())
            .catch(this._http.handleError);
    }

}