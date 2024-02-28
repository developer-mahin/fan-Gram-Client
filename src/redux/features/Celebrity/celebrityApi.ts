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
        const { id, verified } = verifyData;
        console.log(verifyData);

        return {
          url: `/celebrity/${id}`,
          method: "PATCH",
          body: verified,
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
} = celebrityApi;
