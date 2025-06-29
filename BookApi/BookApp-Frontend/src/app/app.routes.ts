import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login';
import {BookListComponent} from './components/book-list/book-list';
import {BookFormComponent} from './components/book-form/book-form';
import {MyQuotesComponent} from './components/my-quotes/my-quotes';
import { RegisterComponent } from './components/register/register';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}, 
    {path: 'books', component: BookListComponent},
    {path: 'books/add', component: BookFormComponent},
    {path: 'books/edit/:id', component: BookFormComponent},
    {path: 'myquotes', component: MyQuotesComponent}
];


@NgModule({ //configures the router at the application's root level
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }