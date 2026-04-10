Dưới đây là nội dung chi tiết cho **Bài 21 – React Router Cơ Bản**, giúp học viên nắm được cách tạo SPA (Single Page Application) nhiều trang bằng cách sử dụng thư viện `react-router-dom`.

---

# Bai21\_Router

## Mục tiêu bài học

* Hiểu khái niệm SPA (Single Page Application) và vai trò của Router
* Biết cách cài đặt và sử dụng `react-router-dom` để tạo đường dẫn
* Quản lý nhiều trang (routes) trong ứng dụng React
* Truyền và đọc tham số trên URL (params)
* Biết sử dụng `Link`, `useNavigate`, `useParams`

---

## Nội dung chính

### 1. Giới thiệu về React Router

React Router là thư viện giúp React tạo các ứng dụng đa trang (Multi-view) nhưng chạy như 1 trang duy nhất (SPA).

#### Cài đặt:

```bash
npm install react-router-dom
```

> Dành cho TypeScript: `react-router-dom` đã hỗ trợ sẵn types, không cần cài thêm `@types`.

---

### 2. Cấu hình Router cơ bản

Trong `main.tsx` hoặc `index.tsx`:

```tsx
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

### 3. Sử dụng Routes trong App.tsx

```tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```

---

### 4. Tạo navigation với Link

```tsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Trang chủ</Link> | <Link to="/about">Giới thiệu</Link>
    </nav>
  );
}
```

---

### 5. useNavigate để điều hướng trong code

```tsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // xử lý đăng nhập...
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Đăng nhập</button>;
}
```

---

### 6. useParams để đọc tham số URL

```tsx
// Route định nghĩa
<Route path="/user/:id" element={<UserProfile />} />

// Component đọc param
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h2>Trang của người dùng có ID: {id}</h2>;
}
```

---

### 7. Route lồng nhau (Nested Routes – nâng cao)

```tsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

---

## Bài tập

### Bài 1 – Tạo 3 trang đơn giản

Tạo 3 component: `Home`, `About`, `Contact`. Dùng `Routes` để điều hướng giữa các trang.

---

### Bài 2 – Tạo Navbar

Tạo component `Navbar` chứa `Link` đến các trang `Home`, `Blog`, `Login`.

---

### Bài 3 – Truyền tham số qua URL

Tạo danh sách bài viết. Khi click vào tiêu đề bài viết, điều hướng đến `/post/:id` và hiển thị nội dung bài viết đó.

---

### Bài 4 – Dùng useNavigate

Sau khi nhấn nút “Đăng ký thành công”, điều hướng người dùng về trang `Login`.

---

### Bài 5 – Tạo Route 404

Thêm một Route mặc định để hiển thị thông báo `"404 – Không tìm thấy trang"` khi người dùng nhập sai đường dẫn.

