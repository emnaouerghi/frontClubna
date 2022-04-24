import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  headers = new HttpHeaders().set('Content-Type','application/json');
  baseUrl='http://localhost:8090';
 constructor(private http:HttpClient) { }
//createSession
CreateSession(data: any,idActivity:number,idSalle:number):Observable<any>{
  return this.http.post('http://localhost:8090/add-session/'+idActivity+"/"+idSalle, data);
}
//getAllsessions
  getSessions(){
    return this.http.get('http://localhost:8090/sessions');
  }
  //getSession
  getSession(id: any) {
    return this.http.get<any>('http://localhost:8090/sessions/session/' + id)
  }
//Update session
updateSession(id : any,data : any):Observable<any>{
let url='http://localhost:8090/sessions/update/'+id;
return this.http.put(url ,data, {headers:this.headers}).pipe(catchError(this.errorMgmt))}
// delete session
deleteSession(id:number) {
 // let endPoints = id
  this.http.delete('http://localhost:8090/sessions/'+ id).subscribe(data => {
    console.log(id); });
}
//error handling
errorMgmt(error: HttpErrorResponse): Observable<never>{
  let errorMessage='';
  if (error.error instanceof ErrorEvent){
    errorMessage =error.error.message;
  } else {
    errorMessage='Error code :${error.status} \n Message:${error.message}';
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
private _listeners = new Subject<any>();
listen():Observable<any>{
  return this._listeners.asObservable();
}
filter(filterBy:string){
  this._listeners.next(filterBy);
}
}
