import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { LogoComponent } from './components/menu/widgets/logo/logo.component';
import { ProfileComponent } from './components/menu/widgets/profile/profile.component';
import { HelpComponent } from './components/menu/widgets/help/help.component';
import { SearchComponent } from './components/header/widgets/search/search.component';
import { FullScreenComponent } from './components/header/widgets/full-screen/full-screen.component';
import { AttachmentsComponent } from './components/header/widgets/attachments/attachments.component';
import { NotificationComponent } from './components/header/widgets/notification/notification.component';
import { MessageComponent } from './components/header/widgets/message/message.component';
import { UserProfileComponent } from './components/header/widgets/user-profile/user-profile.component';
import { BreadcrumbComponent } from './components/ui/breadcrumb/breadcrumb.component';
import { FullLayoutComponent } from './components/layouts/full-layout/full-layout.component';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { OutsideDirective } from './directive/outside.directive';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    FeatherIconsComponent,
    LogoComponent,
    ProfileComponent,
    HelpComponent,
    SearchComponent,
    FullScreenComponent,
    AttachmentsComponent,
    NotificationComponent,
    MessageComponent,
    UserProfileComponent,
    BreadcrumbComponent,
    FullLayoutComponent,
    CustomizerComponent,
    TapToTopComponent,
    LoaderComponent,
    OutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgApexchartsModule,
    NgxDropzoneModule,
    CarouselModule,
    ChartistModule,
    NgbDatepickerModule,
    GoogleMapsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FeatherIconsComponent,
    NgbModule,
    NgApexchartsModule,
    NgxDropzoneModule,
    CarouselModule,
    ChartistModule,
    NgbDatepickerModule,
    GoogleMapsModule,
    TapToTopComponent,
    LoaderComponent,
    ToastrModule
  ]
})
export class SharedModule { }
