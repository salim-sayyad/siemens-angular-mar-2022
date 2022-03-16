import { Container } from "@angular/compiler/src/i18n/i18n_ast";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RootComponent } from "./root/root.component";
import { UtilityModule } from "./utility/utility.module";



@NgModule({
    declarations:[RootComponent],
    imports:[BrowserModule,UtilityModule],
    exports:[],
    bootstrap:[RootComponent]
})
export class AppModule{


}

