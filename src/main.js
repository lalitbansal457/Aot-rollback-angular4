import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map