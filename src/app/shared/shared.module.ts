import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';

const MODULES = [
  CommonModule,
  FontAwesomeModule
];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class SharedModule {
  constructor(private library: FaIconLibrary){
    library.addIcons(
      faEye
    );
  }
}
