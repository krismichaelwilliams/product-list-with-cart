import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Random } from 'random-test-values';
import { Image } from '../../models/image.model';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MenuService);
  });

  it('should make a GET request to the menu api and return list of menu items', () => {
    // Arrange
    let expectedResult = getFakeMenuItems(3);

    // Act
    service.getDesserts().subscribe((response) => {
      expect(response).toEqual(expectedResult);
    });

    // Assert
    const req = httpMock.expectOne(
      'https://localhost:7113/desserts',
      'Expected a call to desserts'
    );

    expect(req.request.method).toBe('GET');
    req.flush(expectedResult);
    httpMock.verify();
  });
});

function getFakeMenuItems(numberOfItems: number): MenuItem[] {
  let fakeMenuItems: MenuItem[] = [];
  for (let i = 0; i < numberOfItems; i++) {
    fakeMenuItems.push({
      id: Random.String(),
      image: getFakeImage(),
      name: Random.String(),
      category: Random.String(),
      price: Random.Number(),
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
