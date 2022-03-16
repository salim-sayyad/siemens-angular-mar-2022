import { NgModule } from "@angular/core";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { UtilityComponent } from "./utility.component";
import { LebalComponent } from './lebal/lebal.component';

@NgModule({
    declarations:[UtilityComponent,LebalComponent,ContainerComponent,HeaderComponent,FooterComponent,MainComponent, LebalComponent],
    exports:[UtilityComponent,LebalComponent,ContainerComponent,HeaderComponent,FooterComponent,MainComponent],
    imports:[]

})
export class UtilityModule{

}