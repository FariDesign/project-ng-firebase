import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

@NgModule({
	declarations: [ LoginComponent ],
	imports: [ MaterialModule ],
	exports: [ LoginComponent ],
	providers: [],
	bootstrap: []
})
export class AppModuleAuth {}
