import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { RouterOutlet } from "@angular/router";
import { Component, inject, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, NgxSpinnerComponent]
})
export class AppComponent implements OnInit {
  private accountService = inject(AccountService);

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }


}