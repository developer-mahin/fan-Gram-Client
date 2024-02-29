import { baseApi } from "../../api/baseApi";

const celebrityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCelebrity: builder.query({
      query: () => {
        return {
          url: "/celebrity",
          method: "GET",
        };
      },
      providesTags: ["celebrity"],
    }),

    addCelebrity: builder.mutation({
      query: (celebrityInfo) => {
        return {
          url: "/celebrity",
          method: "POST",
          body: celebrityInfo,
        };
      },
      invalidatesTags: ["celebrity"],
    }),

    updateCelebrity: builder.mutation({
      query: (verifyData) => {
        return {
          url: `/celebrity`,
          method: "PATCH",
          body: verifyData,
        };
      },
      invalidatesTags: ["celebrity"],
    }),

    DeleteCelebrity: builder.mutation({
      query: (id) => {
        return {
          url: `/celebrity/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["celebrity"],
    }),
  }),
});

export const {
  useGetAllCelebrityQuery,
  useUpdateCelebrityMutation,
  useAddCelebrityMutation,
  useDeleteCelebrityMutation,
} = celebrityApi;
