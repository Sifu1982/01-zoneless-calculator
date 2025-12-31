import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [App],
  //   }).compileComponents();
  // });

  // it('should be 4', () => {
  //   // Arrange

  //   const num1 = 1;
  //   const num2 = 3;

  //   // Act

  //   const result = num1 + num2;

  //   //Assert

  //   expect(result).toBe(4);
  // });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;

    // console.log(compiled.innerHTML);

    expect(app).toBeTruthy();
  });

  it('should render router-outlet', () => {
    const fixture = TestBed.createComponent(App);
    const compiled = fixture.nativeElement as HTMLElement;

    const routerOutlet = compiled.querySelector('router-outlet');

    expect(routerOutlet).toBeTruthy();
  });

  it('should render router-outlet with css classes', () => {
    const fixture = TestBed.createComponent(App);
    const compiled = fixture.nativeElement as HTMLElement;

    const divElement = compiled.querySelector('div');
    const mostHaveClasses =
      'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(
        ' '
      );

    // expect(divElement?.classList.value).toBe(mostHaveClasses);
    divElement?.classList.forEach((className) => {
      expect(mostHaveClasses).toContain(className);
    });
  });

  it('should render buy me a beer link', () => {
    const fixture = TestBed.createComponent(App);
    const compiled = fixture.nativeElement as HTMLElement;

    const linkElement = compiled.querySelector('a');
    expect(linkElement).toBeTruthy();

    const titleAttribute = linkElement?.getAttribute('title');
    const hrefAttribute = linkElement?.getAttribute('href');
    const targetAttribute = linkElement?.getAttribute('target');

    const expectedTitle = 'Buy me a beer';
    const expectedHref = 'https://www.buymeacoffee.com/scottwindon';
    const expectedTarget = '_blank';

    expect(titleAttribute).toBe(expectedTitle);
    expect(hrefAttribute).toBe(expectedHref);
    expect(targetAttribute).toBe(expectedTarget);
  });
});
