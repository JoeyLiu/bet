import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatRadioModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDividerModule,
  MatSelectModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatSortModule,


} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexVipComponent } from './index-vip/index-vip.component';
import { FooterComponent } from './footer/footer.component';
import { WorldcupComponent} from './worldcup/worldcup.component';
import {MatTableModule} from '@angular/material';

import { Worldcup_confirmComponent} from './worldcup_confirm/worldcup_confirm.component';
import {R3dComponent} from './r3d/r3d.component';
import {R113Component} from './r113/r113.component';
import {R3d_confirmComponent} from './r3d_confirm/r3d_confirm.component';
import {R113_confirmComponent} from './r113_confirm/r113_confirm.component';
import {BannerComponent} from './banner/banner.component';
import { KSSwiperModule } from 'angular2-swiper';
import {Nav1Component} from './nav1/nav1.component';
import {PublishComponent} from './Publish/Publish.component';
import {ChargeComponent} from './Charge/Charge.component';
import { PersonComponent } from './person/person.component';
import {PersonJoinedComponent} from './person-joined/person-joined.component';
import { PersonGameListComponent } from './person-game-list/person-game-list.component';
import {PersonGameListWcComponent} from './person-game-list-wc/person-game-list-wc.component';
import {PersonGameListDrawComponent} from './person-game-list-draw/person-game-list-draw.component';
import {PersonPublishedComponent} from './person-published/person-published.component';
import {PersonGamePublishedComponent} from './person-game-published/person-game-published.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Nav1Component,
    LoginComponent,
    IndexComponent,
    IndexVipComponent,
    FooterComponent,
    WorldcupComponent,
    Worldcup_confirmComponent,
    R3dComponent,
    R113Component,
    R3d_confirmComponent,
    R113_confirmComponent,
    BannerComponent,
    PublishComponent,
    ChargeComponent,
    PersonComponent,
    PersonJoinedComponent,
    PersonPublishedComponent,
    PersonGameListComponent,
    PersonGameListWcComponent,
    PersonGameListDrawComponent,
    PersonGamePublishedComponent,
  ],
  imports: [
    KSSwiperModule,
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSortModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatTableModule,


  ],
  providers: [],
  entryComponents: [
    LoginComponent,
    WorldcupComponent,
    Worldcup_confirmComponent,
    R3dComponent,
    R113Component,
    R3d_confirmComponent,
    R113_confirmComponent,
    PublishComponent,
    ChargeComponent,
    PersonComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
