import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type','application/json');
  baseUrl='http://localhost:8082';
 constructor(private http:HttpClient) { }
//createUser 
CreateUser(data: any){
  console.log(data);
  return this.http.post('http://localhost:8082/users/add-user', data);
}
//getAllUsers
  getUsers(){
    return this.http.get('http://localhost:8082/users');
  }
  //getUser
  getUser(id: any) {
    return this.http.get<any>('http://localhost:8082/users/find-user/' + id)
  }
//Update user
updateUser(id : any,data : any):Observable<any>{
let url='http://localhost:8082/users/'+id;
return this.http.put(url ,data, {headers:this.headers}).pipe(catchError(this.errorMgmt))}
// delete user
deleteUser(id:number) {
 // let endPoints = id
  this.http.delete('http://localhost:8082/users/'+ id).subscribe(data => {
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
