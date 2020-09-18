import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { ShowjobsComponent } from './showjobs.component';

describe('ShowjobsComponent', () => {
  let component: ShowjobsComponent;
  let fixture: ComponentFixture<ShowjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
