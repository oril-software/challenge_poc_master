import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatInputModule, MatPaginatorModule} from "@angular/material";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule
  ],
  entryComponents: []
})
export class SharedModule {
}
