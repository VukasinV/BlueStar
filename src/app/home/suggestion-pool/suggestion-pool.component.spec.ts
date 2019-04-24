import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionPoolComponent } from './suggestion-pool.component';

describe('SuggestionPoolComponent', () => {
  let component: SuggestionPoolComponent;
  let fixture: ComponentFixture<SuggestionPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
