import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterLink } from '@angular/router';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
