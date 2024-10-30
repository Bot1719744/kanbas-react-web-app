import { createSlice } from '@reduxjs/toolkit';
import * as db from "../../Database";

const initialState = {
    assignments: db.assignments, // Initialize assignments from database
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: assignment._id || Date.now().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                points: assignment.points,
                submissionType: assignment.submissionType,
                onlineEntryOptions: assignment.onlineEntryOptions,
                assignTo: assignment.assignTo,
                dueDate: assignment.dueDate,
                availableFrom: assignment.availableFrom,
                availableUntil: assignment.availableUntil,
            };
            state.assignments.push(newAssignment); // Directly add the new assignment to the state
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            const index = state.assignments.findIndex((a) => a._id === assignmentId);
            if (index !== -1) {
                state.assignments.splice(index, 1); // Directly remove the assignment at index
            }
        },
        updateAssignment: (state, { payload: updatedAssignment }) => {
            const index = state.assignments.findIndex((a) => a._id === updatedAssignment._id);
            if (index !== -1) {
                state.assignments[index] = { ...updatedAssignment }; // Directly update the assignment
            }
        },
        editAssignment: (state, { payload: assignmentId }) => {
            const index = state.assignments.findIndex((a) => a._id === assignmentId);
            if (index !== -1) {
                state.assignments[index] = { ...state.assignments[index]};
            }
        },
    },
});

// Export actions and reducer
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
