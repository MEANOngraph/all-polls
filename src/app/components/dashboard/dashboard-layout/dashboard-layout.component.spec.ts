import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { ApiService } from 'src/app/services/api.service';
import { Router } from "@angular/router";

const routerSpy = { navigateByUrl: jasmine.createSpy('navigateByUrl') };

describe('DashboardLayoutComponent', () => {
  let component: DashboardLayoutComponent;
  let fixture: ComponentFixture<DashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ApiService,
        {
          provide: Router,
          useValue: routerSpy
        },
      ],
      declarations: [DashboardLayoutComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should try to navigate to login', () => {
    component.logout();
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/sign-in');
  });
});
