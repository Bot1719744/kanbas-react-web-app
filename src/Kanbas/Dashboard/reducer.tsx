import { createSlice } from '@reduxjs/toolkit';
import * as db from "../Database"; // Import from the mock database

const initialState = {
    enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
        enroll: (state, action) => {
            const newEnrollment = {
                _id: Date.now().toString(),
                user: action.payload.userId,
                course: action.payload.courseId
            };

            const exists = state.enrollments.some(
                (enrollment) => enrollment.user === newEnrollment.user && enrollment.course === newEnrollment.course
            );

            if (!exists) {
                state.enrollments.push(newEnrollment);
                localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
            }
        },
        unenroll: (state, action) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) => enrollment.user !== action.payload.userId || enrollment.course !== action.payload.courseId
            );
            localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
        },
    },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
