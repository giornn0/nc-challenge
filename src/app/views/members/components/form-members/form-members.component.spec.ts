import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMembersComponent } from './form-members.component';


describe('FormMembersComponent', () => {
  let component: FormMembersComponent;
  let fixture: ComponentFixture<FormMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
