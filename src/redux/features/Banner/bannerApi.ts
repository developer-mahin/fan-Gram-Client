import { baseApi } from "../../api/baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBannerImage: builder.query({
      query: () => {
        return {
          url: "/banner-img",
          method: "GET",
        };
      },
      providesTags: ["bannerImage"],
    }),

    addBannerImage: builder.mutation({
      query: (celebrityInfo) => {
        return {
          url: "/banner-img",
          method: "POST",
          body: celebrityInfo,
        };
      },
      invalidatesTags: ["bannerImage"],
    }),

    deleteBannerImage: builder.mutation({
      query: (id) => {
        return {
          url: `/banner-img/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["bannerImage"],
    }),
  }),
});

export const {
  useGetAllBannerImageQuery,
  useDeleteBannerImageMutation,
  useAddBannerImageMutation,
} = bannerApi;
