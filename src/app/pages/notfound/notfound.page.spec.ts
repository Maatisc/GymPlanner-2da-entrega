import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NotfoundPage } from './notfound.page';

describe('NotfoundPage', () => {
  let component: NotfoundPage;
  let fixture: ComponentFixture<NotfoundPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotfoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
