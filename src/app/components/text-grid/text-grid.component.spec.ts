import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGridComponent } from './text-grid.component';

describe('TextGridComponent', () => {
  let component: TextGridComponent;
  let fixture: ComponentFixture<TextGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
