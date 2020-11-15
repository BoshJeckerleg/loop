import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@loop/environment';
import { Recording } from '@loop/session/interfaces';
import { fromEvent, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionHttpService {
  private _apiBaseUrl: string;

  constructor(private _http: HttpClient) {
    this._apiBaseUrl = environment.apiBaseUrl;
  }

  public uploadRecording(recording: Recording): Observable<Recording> {
    return this._http
      .post<null>(`${this._apiBaseUrl}/upload`, { recording })
      .pipe(
        catchError(() => {
          return this._audioFileToDataUri(recording).pipe(
            map((url: string) => ({
              ...recording,
              url,
            }))
          );
        })
      );
  }

  private _audioFileToDataUri(recording: Recording): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(recording.file);
    return fromEvent(reader, 'loadend').pipe(map(() => reader.result as string));
  }
}
