import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComicFormComponent } from './search-comic-form.component';

describe('SearchComicFormComponent', () => {
  let component: SearchComicFormComponent;
  let fixture: ComponentFixture<SearchComicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
