import React from "react";
import GlobalStyles from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  SignIn,
  Register,
  Forgot,
  Error,
  ProtectedRoute,
  ResetPassword,
  Verify,
} from "./pages";
import {
  AllCourses,
  AddCourse,
  SharedLayout,
  Profile,
  CourseStats,
  TakeQuiz
} from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import CheckEmail from "./pages/CheckEmail/CheckEmail";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Profile />}
          />
          <Route
            path="add-course"
            element={<AddCourse />}
          />
          <Route
            path="all-courses"
            element={<AllCourses />}
          />
          <Route
            path="stats"
            element={<CourseStats />}
          />
          <Route
            path="take-quiz"
            element={<TakeQuiz />}
          />
        </Route>
        <Route
          path="welcome"
          element={<LandingPage />}
        />
        <Route
          path="sign-in"
          element={<SignIn />}
        />
        <Route
          path="sign-up"
          element={<Register />}
        />
        <Route
          path="user/verify-email"
          element={<Verify />}
        />
        <Route
          path="user/forgot-password"
          element={<Forgot />}
        />
        <Route
          path="user/reset-password"
          element={<ResetPassword />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </Router>
  );
}

export default App;
