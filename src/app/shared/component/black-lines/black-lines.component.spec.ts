import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackLinesComponent } from './black-lines.component';

describe('BlackLinesComponent', () => {
  let component: BlackLinesComponent;
  let fixture: ComponentFixture<BlackLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
