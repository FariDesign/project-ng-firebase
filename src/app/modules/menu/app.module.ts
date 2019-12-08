import { AppRoutingModule } from "./../../app-routing.module";
import { NgModule } from "@angular/core";
import { MenuTopComponent } from "./components/menu-top/menu-top.component";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [MenuTopComponent],
  imports: [MaterialModule, AppRoutingModule],
  exports: [MenuTopComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleMenu {}
