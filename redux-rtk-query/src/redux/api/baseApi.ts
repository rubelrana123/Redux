 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes : ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query ({
      query: () => `/tasks`,
      providesTags : ["tasks"]
    }),
    createTask : builder.mutation({
        query : (taskData) => ({
            url : "/tasks",
            method : "POST",
            body :taskData

        }),
        invalidatesTags : ["tasks"]
    })

    })

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTasksQuery,useCreateTaskMutation } = baseApi