import { baseApi } from "../../api/baseApi";

const homeFAQApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allHomeFaq: builder.query({
      query: () => {
        return {
          url: "/home-faq",
          method: "GET",
        };
      },
      providesTags: ["faq"],
    }),

    createHomeFAQ: builder.mutation({
      query: (info) => {
        return {
          url: "/home-faq",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["faq"],
    }),

    deleteFaq: builder.mutation({
      query: (id) => {
        return {
          url: `/home-faq/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["faq"],
    }),
  }),
});

export const {
  useCreateHomeFAQMutation,
  useAllHomeFaqQuery,
  useDeleteFaqMutation,
} = homeFAQApi;
