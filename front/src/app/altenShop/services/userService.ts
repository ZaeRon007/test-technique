import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { usernameDto } from "../../core/models/dto/usernameDto";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class userService implements OnDestroy{
    private admin: String = "admin@admin.com"
    private isAdmin$ = new BehaviorSubject<boolean>(false);
    private sub: Subscription = new Subscription();

    private apiUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
        this.checkAdmin();
    }

    private getUsername(): Observable<usernameDto> {
        return this.http.get<usernameDto>(`${this.apiUrl}shop/basket/me`);
    }

    private checkAdmin(): void{
        this.sub = this.getUsername().subscribe(response => {
            this.isAdmin$.next(response.username === this.admin);
        });
    }

    public isAccountAdmin$(): Observable<boolean> {
        return this.isAdmin$.asObservable();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}