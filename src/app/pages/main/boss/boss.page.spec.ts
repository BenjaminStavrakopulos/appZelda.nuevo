import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BossPage } from './boss.page';

describe('BossPage', () => {
  let component: BossPage;
  let fixture: ComponentFixture<BossPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
