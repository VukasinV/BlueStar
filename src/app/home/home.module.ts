import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SuggestionPoolComponent } from './suggestion-pool/suggestion-pool.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, SuggestionPoolComponent, SuggestionComponent]
})
export class HomeModule { }
