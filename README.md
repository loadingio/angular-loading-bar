angular-loading-bar
===================

Usage

 * install via npm:
   ```
   npm install @loadingio/angular-loading-bar
   ```

 * include in app.module.ts:
   ```
   import { AngularLoadingBarComponent } from '@loadingio/angular-loading-bar';
   @NgModule({
     declarations: [
       AppComponent,
       AngularLoadingBarComponent
       ...
     ],
     ...
   ```

 * use selector `ld-bar` to add a ldBar component:
   ```
   <ld-bar [config]="config" [value]="value"></ld-bar>
   ```

 * use ```value``` for updating its value, and ```config``` for initializing options. You can also config it via data-* prefix:
   ```
   <ld-bar data-preset="circle"></ld-bar>
   ```

License
-------------------

MIT
