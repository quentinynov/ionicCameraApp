import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import des modules que l'on a besoin
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageView: String;
  // On défini les options de la caméra avec le CameraOptions importer plus haut
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum : true
  }
  base64ToGallery:Base64ToGallery;

  constructor(public navCtrl: NavController, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  // La fonction take picture qui permet une fois le bouton clické d'ouvrir l'appareil photo et de prendre la photo, demander à l'utilisateur
  // s'il veut la garder et elle sera sauvegardé dans sa galerie d'image après acceptation des autorisations, et elle sera affichée sur la page 
  // prévue à cet effet
  takePicture(event) {
      this.camera.getPicture(this.options).then((imageData) => {
          this.imageView = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
          });
      }

}

