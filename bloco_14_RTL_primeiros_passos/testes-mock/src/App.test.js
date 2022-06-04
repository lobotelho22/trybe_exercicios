import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async() => {
  const joke = {
    id: '5M7hF6EItzd',
    joke: 'My pet mouse \'Elvis\' died last night. He was caught in a trap..',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  render(<App />);
  const renderedJoke = await screen.findByText('My pet mouse \'Elvis\' died last night. He was caught in a trap..');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    {headers: {Accept: 'application/json'} },
  )
})