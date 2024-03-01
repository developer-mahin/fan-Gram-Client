import { baseApi } from "../../api/baseApi";

const latestWorkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allLatestWork: builder.query({
      query: () => {
        return {
          url: "/latestWork",
          method: "GET",
        };
      },
      providesTags: ["latestWork"],
    }),

    createLatestWork: builder.mutation({
      query: (info) => {
        return {
          url: "/latestWork",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["latestWork"],
    }),

    deleteLatestWork: builder.mutation({
      query: (id) => {
        return {
          url: `/latestWork/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["latestWork"],
    }),
  }),
});

export const {
  useCreateLatestWorkMutation,
  useAllLatestWorkQuery,
  useDeleteLatestWorkMutation,
} = latestWorkApi;
