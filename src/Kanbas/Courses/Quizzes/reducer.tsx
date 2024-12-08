import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            const newQuiz = {
                _id: new Date().getTime().toString(),
                title: quiz.title || "New Quiz",
                course: quiz.course,
                type: quiz.type || "Graded Quiz", // Default to "Graded Quiz"
                points: quiz.points || 0,
                assignmentGroup: quiz.assignmentGroup || "Quizzes",
                shuffleAnswers: quiz.shuffleAnswers || true,
                timeLimit: quiz.timeLimit || 20,
                multipleAttempts: quiz.multipleAttempts || false,
                maxAttempts: quiz.maxAttempts || 1,
                showCorrectAnswers: quiz.showCorrectAnswers || false,
                accessCode: quiz.accessCode || "",
                oneQuestionAtATime: quiz.oneQuestionAtATime || true,
                webcamRequired: quiz.webcamRequired || false,
                lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering || false,
                dueDate: quiz.dueDate || null,
                availableFrom: quiz.availableFrom || null,
                availableUntil: quiz.availableUntil || null,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (quiz: any) => quiz._id !== quizId
            );
        },
        updateQuiz: (state, { payload: updatedQuiz }) => {
            state.quizzes = state.quizzes.map((quiz: any) =>
                quiz._id === updatedQuiz._id ? updatedQuiz : quiz
            )as any;
        },
        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((quiz: any) =>
                quiz._id === quizId ? { ...quiz, editing: true } : quiz
            )as any;
        },
    },
});

export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz, editQuiz } =
    quizzesSlice.actions;
export default quizzesSlice.reducer;
