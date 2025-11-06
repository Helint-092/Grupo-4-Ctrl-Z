import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JorgeMartinezComponent } from './jorge-martinez.component';

describe('JorgeMartinezComponent', () => {
  let component: JorgeMartinezComponent;
  let fixture: ComponentFixture<JorgeMartinezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JorgeMartinezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JorgeMartinezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
