import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, BannerModule],
      declarations: [ContactComponent],
      providers: [NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
