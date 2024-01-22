import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetCashflowResponse, GetNpvResponse ,GetRevenueResponse } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.node_APP_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Cashflow", "NetValue", "Revenue"],
  endpoints: (build) => ({
    getCashflow: build.query<Array<GetCashflowResponse>, void>({
      query: () => "api/cashflow/",
      providesTags: ["Cashflow"],
    }),
    getNpv: build.query<Array<GetNpvResponse>, void>({
      query: () => "api/npv/",
      providesTags: ["NetValue"],
    }),
    getRevenue: build.query<Array<GetRevenueResponse>, void>({
      query: () => "api/revenue/",
      providesTags: ["Revenue"],
    }),
  })
});

export const { useGetCashflowQuery, useGetRevenueQuery, useGetNpvQuery } = api;