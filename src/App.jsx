import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./components/layout/PrivateLayout";
import CategoryList from "./pages/category/CategoryList";
import PostList from "./pages/post/PostList";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import PublicLayout from "./components/layout/PublicLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./assets/CSS/main.css";
import "./assets/CSS/form.css";
import "./assets/CSS/post.css";


function App() {
  return (
    <Routes>
      <Route element={<PrivateLayout />} >
        <Route path="/" element={<Home/>} />
        <Route path="categories" element={<CategoryList/>} />
        <Route path="posts" element={<PostList/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="setting" element={<Setting/>} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  );
}

export default App;
