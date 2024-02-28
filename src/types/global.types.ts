import { BaseQueryApi } from "@reduxjs/toolkit/query";

/* eslint-disable @typescript-eslint/no-explicit-any */

type TErrorSources = {
  path: string;
  message: string;
};

export type TError = {
  data: {
    errorSources?: TErrorSources[];
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
