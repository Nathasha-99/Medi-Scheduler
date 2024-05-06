import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard1Page } from './dashboard1.page';

describe('Dashboard1Page', () => {
  let component: Dashboard1Page;
  let fixture: ComponentFixture<Dashboard1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
