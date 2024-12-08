import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
};

const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        addQuestion: (state, { payload: question }) => {

            const newQuestion = {
                _id: new Date().getTime().toString(),
                type: question.type || "Multiple Choice", // Default to "Multiple Choice"
                text: question.text || "New Question",
                points: question.points || 0,
                options: question.options || [], // For multiple choice and true/false
                correctAnswers: question.correctAnswers || [], // For fill-in-the-blank
                quizId: question.quizId, // The quiz this question belongs to
            };
            console.log("Adding question to state:", question);
            state.questions = [...state.questions, newQuestion] as any;
            console.log("Updated state after adding:", state.questions);
        },
        deleteQuestion: (state, { payload: questionId }) => {
            state.questions = state.questions.filter(
                (question: any) => question._id !== questionId
            );
        },
        updateQuestion: (state, { payload: updatedQuestion }) => {
            state.questions = state.questions.map((question: any) =>
                question._id === updatedQuestion._id ? updatedQuestion : question
            ) as any;
        },
        editQuestion: (state, { payload: questionId }) => {
            state.questions = state.questions.map((question: any) =>
                question._id === questionId ? { ...question, editing: true } : question
            ) as any;
        },
    },
});

export const {
    setQuestions,
    addQuestion,
    deleteQuestion,
    updateQuestion,
    editQuestion,
} = questionsSlice.actions;
export default questionsSlice.reducer;
