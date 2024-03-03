import { baseApi } from "../../api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTestimonial: builder.query({
      query: () => {
        return {
          url: "/testimonial",
          method: "GET",
        };
      },
      providesTags: ["testimonial"],
    }),

    createTestimonial: builder.mutation({
      query: (info) => {
        return {
          url: "/testimonial",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["testimonial"],
    }),

    deleteTestimonial: builder.mutation({
      query: (id) => {
        return {
          url: `/testimonial/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const {
  useCreateTestimonialMutation,
  useAllTestimonialQuery,
  useDeleteTestimonialMutation,
} = testimonialApi;
