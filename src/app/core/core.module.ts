import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { SuggestionService } from './suggestion.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserService,
    SuggestionService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Already injected in app module');
    }
  }
}
