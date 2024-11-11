import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enroll: (state, { payload: enrollment }) => {
            state.enrollments = [...state.enrollments, enrollment] as any;
        },
        unenroll: (state, { payload: { userId, courseId } }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment: any) => enrollment.user !== userId || enrollment.course !== courseId
            );
        },
    },
});

export const { setEnrollments, enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
