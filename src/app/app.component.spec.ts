import { componentFactoryName } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';


const mockAppService ={
  getRepositories(){
    return of({});
  } 
}
let component:AppComponent ;
let appSrvc:AppService;
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[{provide:AppService,useValue:mockAppService}]
    }).compileComponents().then(()=>{

      const fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      appSrvc = TestBed.get(AppService);
    });
  });

  it('should create the app', () => {
    
    expect(component).toBeTruthy();
  });

  it('should call getInitialData on ngOninit()',()=>{
    spyOn(component,'getInitialData');
    component.ngOnInit();
    expect(component.getInitialData).toHaveBeenCalled();
  });
  it('should call getRepositories on getInitialData()',()=>{
    spyOn(appSrvc,'getRepositories').and.returnValue(of({}));
    component.getInitialData();
    expect(appSrvc.getRepositories).toHaveBeenCalled();
  });

});
