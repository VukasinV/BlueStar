import { Injectable } from '@angular/core';
import { Suggestion } from '../model/suggestion.model';
import { User } from '../model/user.model';

@Injectable()
export class SuggestionService {

  suggestions: Suggestion[];

  constructor() {
    this.suggestions = [];
  }

  addSuggesion(suggestion: Suggestion) {
    this.suggestions.push(suggestion);
  }

  voteForSuggestion(id: number, user: User) {
    // TODO implement this;
  }
}
