import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import {act} from 'react-dom/test-utils';

import Price from './Price';
import PriceRange from './PriceRange';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it('Price should render with only one price', () => {
  act(() => {
    render(<Price normalPrice='1.99'/>, container)
  });
  expect(container.textContent).toBe(`$${Number('1.99').toFixed(2)}`);
})

it('Price should render when there is only one normal price and only one sale price', () => {
  act(() => {
    render(<Price normalPrice='4.99' salePrice="4.10" />, container)
  });
  expect(container.textContent).toBe(`$${Number('4.99').toFixed(2)}  $${Number('4.10').toFixed(2)}`);
});

it('PriceRange should render when there is only one range of prices', () => {
  act(() => {
    render(<PriceRange normalLowPrice='12.99' normalHighPrice='27.99' />, container)
  });
  expect(container.textContent).toBe(`$${Number(12.99).toFixed(2)}-$${Number(27.99).toFixed(2)}`)
})

it('PriceRange should redner when there is normal and sale price', () => {
  act(() => {
    render(<PriceRange normalLowPrice='12.99' normalHighPrice='27.99' saleLowPrice='7.99' saleHighPrice='19.99'/>, container)
  });
  expect(container.textContent).toBe(`$${Number(12.99).toFixed(2)}-$${Number(27.99).toFixed(2)}  $${Number(7.99).toFixed(2)}-$${Number(19.99).toFixed(2)}`)
})
