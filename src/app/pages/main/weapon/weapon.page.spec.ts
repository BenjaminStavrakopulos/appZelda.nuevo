import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponPage } from './weapon.page';

describe('WeaponPage', () => {
  let component: WeaponPage;
  let fixture: ComponentFixture<WeaponPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
