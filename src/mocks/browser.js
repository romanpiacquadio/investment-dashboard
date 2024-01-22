import { http } from 'msw';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(
  http.get('/api/cashflow', () => {
    return Response.json([
      {
        year: 'Year 0',
        cashflow: -20000,
      },
      {
        year: 'Year 1',
        cashflow: 1000,
      },
      {
        year: 'Year 2',
        cashflow: 5000,
      },
      {
        year: 'Year 3',
        cashflow: 8000,
      },
      {
        year: 'Year 4',
        cashflow: 10000,
      },
      {
        year: 'Year 5',
        cashflow: 12000,
      },
    ])
  }),
  http.get('/api/npv', () => {
    return Response.json([
      {
        discountRate: '0%',
        npv: 26000,
      },
      {
        discountRate: '10%',
        npv: 12394,
      },
      {
        discountRate: '20%',
        npv: 4697,
      },
      {
        discountRate: '30%',
        npv: 165.31,
      },
      {
        discountRate: '40%',
        npv: -2577.16,
      },
      {
        discountRate: '50%',
        npv: -4263.37,
      },
      {
        discountRate: '60%',
        npv: -5303.57,
      },
      {
        discountRate: '70%',
        npv: -5937.09,
      },
      {
        discountRate: '80%',
        npv: -6308.60,
      },
      {
        discountRate: '90%',
        npv: -6508.27,
      },
      {
        discountRate: '100%',
        npv: -6593.75,
      },
    ])
  }),
  http.get('/api/revenue', () => {
    return Response.json([
      {
        year: 'Year 1',
        profit: 1000,
        revenue: 3000,
      },
      {
        year: 'Year 2',
        profit: 5000,
        revenue: 8000,
      },
      {
        year: 'Year 3',
        profit: 8000,
        revenue: 12000,
      },
      {
        year: 'Year 4',
        profit: 10000,
        revenue: 14000,
      },
      {
        year: 'Year 5',
        profit: 12000,
        revenue: 15500,
      },
    ])
  }),
)