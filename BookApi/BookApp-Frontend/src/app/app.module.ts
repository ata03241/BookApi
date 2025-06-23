import { NgModule } from "@angular/core";
import { App } from "./app";

import { LoginComponent } from "./components/login/login";
import { BookListComponent } from "./components/book-list/book-list";
import { BookFormComponent } from "./components/book-form/book-form";
import { MyQuotesComponent } from "./components/my-quotes/my-quotes";
import { NavigationComponent } from "./components/navigation/navigation";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";

@NgModule({
    declarations: [
        App,
        LoginComponent,
        BookListComponent,
        BookFormComponent,
        MyQuotesComponent,
        NavigationComponent
    ],
    imports: [
        // Add necessary Angular modules here
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [App]
})
export class AppModule{}