import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import des modules que l'on a besoin
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MediaCapture, MediaFile, CaptureImageOptions } from '@ionic-native/media-capture';

/**
 * Generated class for the PageGeneratedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-generated',
  templateUrl: 'page-generated.html',
})
export class PageGeneratedPage {
  imageView: String;
  videoView: String;
  vidType: String;
  vidUrl: String;
  // On défini les options de la caméra avec le CameraOptions importer plus haut
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum : true
  }
  base64ToGallery:Base64ToGallery;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private camera: Camera,
      private notification: LocalNotifications,
      private videoCapture: MediaCapture,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageGeneratedPage');
  }

  // La fonction take picture qui permet une fois le bouton clické d'ouvrir l'appareil photo et de prendre la photo, demander à l'utilisateur
  // s'il veut la garder et elle sera sauvegardé dans sa galerie d'image après acceptation des autorisations, et elle sera affichée sur la page 
  // prévue à cet effet
  takePicture(event) {
    this.camera.getPicture(this.options).then((imageData) => {
        this.imageView = 'data:image/jpeg;base64,' + imageData;
        // Push une notification pour informer que la photo a bien ete enregistree
        this.notification.schedule({
          text: `Image sauvegardée dans votre album`,
      });
  }, (err) => {
        });
  }


  // Même principe que la takePicture mais utilisant le module MediaCapture pour pouvoir l'enregistrement d'une video
  takeVideo(event) {
    let options: CaptureImageOptions = { limit: 3 };
    this.videoCapture
      .captureVideo(options)
      .then(
        (data: MediaFile[]) => {
          let videoView: MediaFile = data[0];
          this.vidUrl = videoView.fullPath;
          this.vidType = videoView.type;

          this.notification.schedule({
              text: `Video sauvegardée dans votre album`,
          });
      },
      )
  }

}
