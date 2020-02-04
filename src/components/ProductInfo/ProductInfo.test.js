import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import {act} from 'react-dom/test-utils';

import Price from './PriceInfo/Price';
import PriceRange from './PriceInfo/PriceRange';
import ProductInfo from './ProductInfo';

let container = null;

let testItem1 =
  {
    "id": "portside-aluminum-outdoor-dining-chair-set-2-h5139",
    "name": "Portside Aluminum Outdoor Dining Chair (Set of 2)",
    "price": {
      "regular": 599,
      "selling": 479.2,
      "type": "special"
    },
    "hero": {
      "size": "m",
      "meta": "",
      "alt": "",
      "rel": "hero",
      "width": 363,
      "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201951/0031/portside-aluminum-outdoor-dining-chair-set-of-2-m.jpg",
      "height": 363
    },
    "images": [
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/202001/0016/portside-aluminum-outdoor-dining-chair-set-of-2-m.jpg",
        "height": 363
      },
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201951/0023/portside-aluminum-outdoor-dining-chair-set-of-2-1-m.jpg",
        "height": 363
      },
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201951/0022/portside-aluminum-outdoor-dining-chair-set-of-2-m.jpg",
        "height": 363
      },
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201951/0024/portside-aluminum-outdoor-dining-chair-set-of-2-m.jpg",
        "height": 363
      },
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201951/0022/portside-aluminum-outdoor-dining-chair-set-of-2-1-m.jpg",
        "height": 363
      }
    ],
  }

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it('ProductInfo should render Price component when there is no price range', () => {
  act(() => {
    render(<ProductInfo product={testItem1} />, container);
  });
  expect(container.textContent).toBe(`${testItem1.name}$${Number(testItem1.price.regular).toFixed(2)}  $${Number(testItem1.price.selling).toFixed(2)}`)
})

let testItem2 = {
    "id": "portside-76-5-dining-table-6-textilene-chairs-set-h5144",
    "name": "Portside 76.5&quot; Dining Table &amp; 6 Textilene Chairs Set",
    "priceRange": {
      "regular": {
        "high": 2276,
        "low": 2273
      },
      "selling": {
        "high": 1820.8,
        "low": 1818.4
      },
      "type": "special"
    },
    "hero": {
      "size": "m",
      "meta": "",
      "alt": "",
      "rel": "hero",
      "width": 363,
      "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/202002/0030/portside-765-dining-table-6-textilene-chairs-set-1-m.jpg",
      "height": 363
    },
    "images": [
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/202002/0030/portside-765-dining-table-6-textilene-chairs-set-m.jpg",
        "height": 363
      },
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/202002/0029/portside-765-dining-table-6-textilene-chairs-set-m.jpg",
        "height": 363
      },
      {
        "size": "m",
        "meta": "",
        "alt": "",
        "rel": "althero",
        "width": 363,
        "href": "https://www.westelm.com/weimgs/ab/images/wcm/products/201951/0035/portside-765-dining-table-6-textilene-chairs-set-m.jpg",
        "height": 363
      }
    ],
  }

it('ProductInfo should render with Pricerange component when there is a price range', () => {
  act(() => {
    render(<ProductInfo product={testItem2} />, container);
  });
  expect(container.textContent).toBe(`${testItem2.name}$${Number(testItem2.priceRange.regular.low).toFixed(2)}-$${Number(testItem2.priceRange.regular.high).toFixed(2)}  $${Number(testItem2.priceRange.selling.low).toFixed(2)}-$${Number(testItem2.priceRange.selling.high).toFixed(2)}`)
})
