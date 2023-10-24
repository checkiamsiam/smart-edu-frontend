import { IMeta, ISemesterRegistration } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const BASE_SEMESTER_REGISTRATION = "/semester-registration";
export const semesterRegistrationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    semesterRegistrations: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_SEMESTER_REGISTRATION,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ISemesterRegistration[], meta: IMeta) => {
        return {
          semesterRegistrations: response,
          meta,
        };
      },
      providesTags: [tagTypes.semesterRegistration],
    }),
    semesterRegistration: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.semesterRegistration],
    }),
    addSemesterRegistrations: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/create`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.semesterRegistration],
    }),
    updateSemesterRegistrations: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/update/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.semesterRegistration],
    }),
    deleteSemesterRegistrations: build.mutation({
      query: (id) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.semesterRegistration],
    }),
    myRegistration: build.query({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/get-my-registration`,
        method: "GET",
      }),
      providesTags: [tagTypes.courseRegistration],
    }),
    startRegistration: build.mutation({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/start-registration`,
        method: "POST",
      }),
    }),
    mySemesterRegistrationCourses: build.query({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/my-semester-registration-courses
				`,
        method: "GET",
      }),
      providesTags: [tagTypes.courseRegistration],
    }),
    enrollIntoCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/enroll-into-course`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
    withdrawFromCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/withdraw-from-course`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
    confirmMyRegistration: build.mutation({
      query: () => ({
        url: `${BASE_SEMESTER_REGISTRATION}/confirm-registration`,
        method: "POST",
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
    startNewSemester: build.mutation({
      query: (id) => ({
        url: `${BASE_SEMESTER_REGISTRATION}/start-new-semester/${id}`,
        method: "POST",
      }),
      invalidatesTags: [tagTypes.courseRegistration],
    }),
  }),
});

export const {
  useSemesterRegistrationsQuery,
  useSemesterRegistrationQuery,
  useAddSemesterRegistrationsMutation,
  useDeleteSemesterRegistrationsMutation,
  useUpdateSemesterRegistrationsMutation,

  useMyRegistrationQuery,
  useStartRegistrationMutation,
  useMySemesterRegistrationCoursesQuery,
  useEnrollIntoCourseMutation,
  useConfirmMyRegistrationMutation,
  useWithdrawFromCourseMutation,
  useStartNewSemesterMutation,
} = semesterRegistrationApi;

export default semesterRegistrationApi;
