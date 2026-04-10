# Bai23\_Project\_CuoiKhoa

## Mục tiêu bài học

* Áp dụng đầy đủ kiến thức đã học về React, TypeScript, Router, Form, Context, Hook
* Thực hành xây dựng một ứng dụng CRUD có cấu trúc mô-đun rõ ràng
* Biết cách chia component, quản lý state cục bộ và toàn cục
* Giao tiếp với API (mock API hoặc server thật)
* Trình bày dự án cá nhân một cách chuyên nghiệp (git, readme, code clean)

---

## Nội dung chính

### 1. Yêu cầu của project

Tùy vào lớp học hoặc định hướng, giảng viên có thể chọn 1 trong 2 hướng:

#### **A. Quản lý người dùng (User Management)**

Tính năng:

* Trang đăng nhập (không cần thực tế auth)
* Trang danh sách người dùng (lấy từ API hoặc local)
* Trang tạo người dùng
* Trang chỉnh sửa người dùng
* Xóa người dùng

#### **B. To-do App nâng cao**

Tính năng:

* Danh sách việc cần làm
* Thêm, sửa, xóa task
* Gán deadline, ưu tiên
* Lọc theo trạng thái (đã xong/chưa xong)
* Lưu vào localStorage hoặc dùng JSON Server

---

### 2. Công nghệ và thư viện sử dụng

* React + TypeScript
* React Router DOM
* useState, useEffect, useContext, useRef, custom hooks
* CSS modules hoặc Tailwind CSS (tùy chọn)
* (Tuỳ chọn) Axios, React Hook Form

---

### 3. Cấu trúc thư mục gợi ý

```
src/
├── components/         # Reusable components
├── pages/              # Các trang chính: Home, UserList, CreateUser, ...
├── hooks/              # Custom hooks (nếu có)
├── contexts/           # Context API (Auth, Theme, Global state)
├── services/           # API layer (nếu dùng axios hoặc fetch)
├── types/              # Định nghĩa TypeScript
├── App.tsx
├── main.tsx
```

---

## Bài tập / Nhiệm vụ cuối khoá

### Yêu cầu bắt buộc

1. Tự chọn 1 trong 2 hướng (Quản lý User hoặc Todo App)
2. Sử dụng đầy đủ: `Props`, `State`, `useEffect`, `useRef`, `Form`, `Router`, `Type`
3. Cấu trúc mã rõ ràng, chia component hợp lý
4. Có file `README.md` mô tả dự án
5. Push toàn bộ lên GitHub, trình bày demo cuối khóa

---

### Gợi ý mở rộng (bonus điểm)

* Tạo hiệu ứng loading
* Thêm xác nhận khi xóa
* Sử dụng `react-hook-form` để validate
* Thêm chức năng tìm kiếm, lọc
* Sử dụng Context để quản lý người dùng đăng nhập

