import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageGeneratedPage } from '../pages/page-generated/page-generated';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MediaCapture } from '@ionic-native/media-capture';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageGeneratedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageGeneratedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Ajout des modules que l'on a installe
    Camera,
    Base64ToGallery,
    LocalNotifications,
    MediaCapture,
  ]
})
export class AppModule {}
