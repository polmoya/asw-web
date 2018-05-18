import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatCheckboxModule],
  exports: [MatToolbarModule, MatButtonModule, MatCheckboxModule],
})
export class MaterialModule {
}
