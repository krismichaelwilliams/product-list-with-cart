import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Random } from 'random-test-values';
import { Image } from '../../../models/image.model';
import { MenuItem } from '../../../models/menu-item.model';
import { DessertItemComponent } from './dessert-item.component';

describe('DessertItemComponent', () => {
  let component: DessertItemComponent;
  let fixture: ComponentFixture<DessertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DessertItemComponent);
    component = fixture.componentInstance;
    component.dessertItem = getFakeMenuItems(1)[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('addToCart', () => {
    it('should increment amountInCart by one', () => {
      // Arrange
      component.amountInCart = Random.Number({ max: 10 });
      var expected = component.amountInCart + 1;

      // Act
      component.addToCart();

      // Assert
      expect(component.amountInCart).toEqual(expected);
    });
  });

  describe('removeFromCart', () => {
    it('should decrement amountInCart by one', () => {
      // Arrange
      component.amountInCart = Random.Number({ max: 10 });
      var expected = component.amountInCart - 1;

      // Act
      component.removeFromCart();

      // Assert
      expect(component.amountInCart).toEqual(expected);
    });
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
