import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/register-user",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    loginUser: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    verifyEmail: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/verify-email",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    changePassword: builder.mutation({
      query: (args) => {
        return {
          url: "/auth/change-password",
          method: "POST",
          body: args,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useVerifyEmailMutation,
  useRegisterUserMutation,
  useChangePasswordMutation,
} = userApi;
