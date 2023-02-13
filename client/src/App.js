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
} from "./pages";
import {
  AllCourses,
  AddCourse,
  SharedLayout,
  Profile,
  CourseStats,
} from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
            element={<CourseStats />}
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
            path="profile"
            element={<Profile />}
          />
        </Route>
        <Route
          path="/welcome"
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
          path="forgot-password"
          element={<Forgot />}
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
