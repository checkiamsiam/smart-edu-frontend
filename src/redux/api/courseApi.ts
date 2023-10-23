import { ICourse, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const COURSE_URL = "/course";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    courses: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: COURSE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ICourse[], meta: IMeta) => {
        return {
          courses: response,
          meta,
        };
      },
      providesTags: [tagTypes.course],
    }),
    // get single
    course: build.query({
      query: (id: string) => ({
        url: `${COURSE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.course],
    }),
    // create
    addCourse: build.mutation({
      query: (data) => ({
        url: `${COURSE_URL}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    // update
    updateCourse: build.mutation({
      query: (data) => ({
        url: `${COURSE_URL}/update/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.course],
    }),
    // delete
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `${COURSE_URL}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.course],
    }),
  }),
});

export const {
  useCoursesQuery,
  useCourseQuery,
  useAddCourseMutation,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
} = courseApi;
