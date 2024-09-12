import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/blogs`,
    }),
  }),
});

export const baseApiReducer = baseApi.reducer;
export const { useGetBlogsQuery } = baseApi;
