import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  headers = new HttpHeaders().set('Content-Type','application/json');
  baseUrl='http://localhost:8090';
 constructor(private http:HttpClient) { }
//create abonnement
CreateAbonnement(data: any,idUser:number,idActivity:number):Observable<any>{
  return this.http.post('http://localhost:8090/add-abonnement/'+idUser+'/'+idActivity, data);
}
//getAllabonnements
  getAbonnements(){
    return this.http.get('http://localhost:8090/abonnements');
  }
  //getabonnement
  getAbonnement(id: any) {
    return this.http.get<any>('http://localhost:8090/sessions/session/' + id)
  }
//Update abonnement
updateAbonnement(id : any,data : any):Observable<any>{
let url='http://localhost:8090/abonnement/update/'+id;
return this.http.put(url ,data, {headers:this.headers}).pipe(catchError(this.errorMgmt))}
// delete abonnement
deleteAbonnement(id:number) {
 // let endPoints = id
  this.http.delete('http://localhost:8090/abonnements/'+ id).subscribe(data => {
    console.log(id); });
}

// send mail 
sendMail(id:number) {
  return this.http.get('http://localhost:8090/abonnements/sendMail/'+id).subscribe(data => {
    console.log(id); });
}

// generare pdf
printPDF(id:number):Observable<any>{
  return this.http.get('http://localhost:8090/pdf/generate/'+id,{responseType: 'blob'});
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
