import { tagTypes } from "@/redux/tag-types";
import { IAcademicDepartment, IMeta } from "@/types";
import { baseApi } from "../baseApi";

const ACADEMIC_DEPARTMENT_URL = "/academic-department";

export const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic departments
    academicDepartments: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ACADEMIC_DEPARTMENT_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAcademicDepartment[], meta: IMeta) => {
        return {
          academicDepartments: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicDepartment],
    }),
    // get single academic department
    academicDepartment: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.academicDepartment],
    }),
    // create a new academic department
    addAcademicDepartment: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
    // update ac department
    updateAcademicDepartment: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/update/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),

    // delete ac department
    deleteAcademicDepartment: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.academicDepartment],
    }),
  }),
});

export const {
  useAddAcademicDepartmentMutation,
  useAcademicDepartmentsQuery,
  useAcademicDepartmentQuery,
  useUpdateAcademicDepartmentMutation,
  useDeleteAcademicDepartmentMutation,
} = academicDepartmentApi;
