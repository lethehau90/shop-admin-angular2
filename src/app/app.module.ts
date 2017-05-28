import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { appRouter } from './app.routes';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRouter)
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
