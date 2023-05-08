import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

interface VisitorParams {
  id: string;
  hit?: string;
  value?: number;
}

interface VisitorResponse {
  id: string;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class VisitorsService {
  constructor(private apiS: ApiService) {}

  getWebsiteVisitorsValue(): Observable<VisitorResponse> {
    const url = 'https://api.api-ninjas.com/v1/counter';
    let params: VisitorParams = { id: 'vistiors_website', hit: 'false' };

    const headers: HttpHeaders = new HttpHeaders().set(
      'X-Api-Key',
      'ElrsbKTbn1ZTgt7bYIV8rQ==IOBWv588zG0CXsZt'
    );

    return this.apiS.sendGetRequest<VisitorResponse>(url, params, headers).pipe(
      switchMap((result) => {
        params = { ...params, value: result.value + 1 };

        return this.apiS.sendGetRequest<VisitorResponse>(url, params, headers);
      })
    );
  }
}
