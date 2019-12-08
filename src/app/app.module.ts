import { AppModuleCourses } from "./modules/courses/app.module";
import { AppModuleMenu } from "./modules/menu/app.module";
import { AppModuleCommon } from "./modules/common/app.module";
import { AppModuleAuth } from "./modules/authen/app.module";
import { AppModuleAdmin } from "./modules/admin/app.module";
import { environment } from "./../environments/environment.prod";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppModuleAdmin,
    AppModuleAuth,
    AppModuleCommon,
    AppModuleMenu,
    AppModuleCourses
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
