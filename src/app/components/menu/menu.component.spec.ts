import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Random } from 'random-test-values';
import { Subject, timer } from 'rxjs';
import { Image } from '../../models/image.model';
import { MenuItem } from '../../models/menu-item.model';
import { DessertItemSuccessResponse } from '../../models/responseModels/dessert-item-success-response.model';
import { MenuService } from '../../services/menu/menu.service';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuServiceSpy: jasmine.SpyObj<MenuService>;
  let dessertsSubject: Subject<DessertItemSuccessResponse>;

  beforeEach(async () => {
    menuServiceSpy = jasmine.createSpyObj('MenuService', ['getDesserts']);
    dessertsSubject = new Subject<DessertItemSuccessResponse>();

    // Arrange OnInit
    menuServiceSpy.getDesserts.and.returnValue(dessertsSubject);

    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [
        { provide: MenuService, useValue: menuServiceSpy },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call menu service and return list of menu items', fakeAsync(() => {
      // Arrange
      let expectedResult = getFakeMenuItems(3);
      let successResponse = toSuccessResponse(expectedResult);

      // Act
      timer(1000).subscribe(() => dessertsSubject.next(successResponse));
      tick(2000);

      // Assert
      expect(menuServiceSpy.getDesserts).toHaveBeenCalled();
      expect(component.dessertItems).toEqual(expectedResult);
    }));
  });
});

function toSuccessResponse(menuItems: MenuItem[]): DessertItemSuccessResponse {
  return {
    status: 'success',
    data: menuItems,
  } satisfies DessertItemSuccessResponse;
}

function getFakeMenuItems(numberOfItems: number): MenuItem[] {
  let fakeMenuItems: MenuItem[] = [];
  for (let i = 0; i < numberOfItems; i++) {
    fakeMenuItems.push({
      id: Random.String(),
      image: getFakeImage(),
      name: Random.String(),
      category: Random.String(),
      price: Random.DecimalNumber({ max: 10, maxDecimalPlaces: 2 }),
    });
  }

  return fakeMenuItems;
}

function getFakeImage(): Image {
  return {
    thumbnail: Random.String(),
    mobile: Random.String(),
    tablet: Random.String(),
    desktop: Random.String(),
  };
}
