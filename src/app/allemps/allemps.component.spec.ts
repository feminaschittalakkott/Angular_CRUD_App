import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllempsComponent } from './allemps.component';

describe('AllempsComponent', () => {
  let component: AllempsComponent;
  let fixture: ComponentFixture<AllempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllempsComponent]
    });
    fixture = TestBed.createComponent(AllempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
