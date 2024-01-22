export interface GetCashflowResponse {
  year: string;
  cashflow: number;
}

export interface GetNpvResponse {
  discountRate: string;
  npv: number;
}

export interface GetRevenueResponse {
  year: string;
  profit: number;
  revenue: number;
}