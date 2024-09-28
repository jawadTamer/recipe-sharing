import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
