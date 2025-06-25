import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { productEntity } from "../../core/models/productEntity";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = environment.baseUrl;

    constructor(private http: HttpClient) {

    }

    public getAllProducts(): Observable<productEntity[]> {
        return this.http.get<productEntity[]>(`${this.apiUrl}products`);
    }
    
}