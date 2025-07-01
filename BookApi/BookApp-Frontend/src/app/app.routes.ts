import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login';
import {BookListComponent} from './components/book-list/book-list';
import {BookFormComponent} from './components/book-form/book-form';
import {MyQuotesComponent} from './components/my-quotes/my-quotes';
import { RegisterComponent } from './components/register/register';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}, 
    {path: `home`, component: Home, canActivate: [authGuard]},
    {path: 'books', component: BookListComponent, canActivate: [authGuard]},
    {path: 'books/add', component: BookFormComponent, canActivate: [authGuard]},
    {path: 'books/edit/:id', component: BookFormComponent, canActivate: [authGuard]},
    {path: 'myquotes', component: MyQuotesComponent, canActivate: [authGuard]}
];

