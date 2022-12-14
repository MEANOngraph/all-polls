import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { apiResponse, pollFormDetails, PollResponse } from '../interface/poll';
import { ApiService } from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private apiService: ApiService,
    ) { }

 // get All Polls List 
    public getPolls(search: string,limit: number, page: number): Observable<PollResponse> {
      return this.apiService.request('get','polls/poll-list?search='
      + search + '&limit=' + limit + '&page=' + page);
    }

 // update poll status
    public updatePollStaus(status:Boolean): Observable<apiResponse> {
      return this.apiService.request('post', 'updatePollStaus',{status});
    }

 // delete poll by id
    public deletePolls(id:string): Observable<apiResponse>{
      return this.apiService.request('post', 'deletePoll',{id});
    }

 // save new Poll
    public saveNewPoll(payload:pollFormDetails): Observable<apiResponse> {
      return this.apiService.request('post','polls/create-poll',{payload});
    }

// get poll by id
  public getPollById(pollId:string): Observable<any>{
    return this.apiService.request('get', 'polls/get-poll/'+pollId);
  }

// submit poll
  public submitPoll(payload:Object): Observable<apiResponse>{
    return this.apiService.request('post', 'polls/submit-poll/',{payload});
  }

// change status
  public changePollStatus(pollId: string): Observable<apiResponse>{
    return this.apiService.request('get', 'polls/poll-status/'+pollId);
  }

}
