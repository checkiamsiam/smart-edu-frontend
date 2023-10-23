import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-department";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department],
    }),

    addDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    // get single department by id
    department: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),

    // update single department by id
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/update/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    // delete single department by id
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useAddDepartmentMutation,
  useDepartmentQuery, // get single department hooks
  useUpdateDepartmentMutation, // update single department hooks
  useDeleteDepartmentMutation, // delete single department hooks
} = departmentApi;
