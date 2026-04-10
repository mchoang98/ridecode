Dưới đây là nội dung bài giảng chi tiết cho **Bài 20 – Xử lý Form trong React + TypeScript**, giúp học viên nắm vững kỹ năng quản lý form, binding dữ liệu, và xác thực đầu vào trong component.

---

# Bai20\_Form

## Mục tiêu bài học

* Biết cách tạo form trong React sử dụng JSX
* Quản lý giá trị các trường form bằng `useState`
* Hiểu cơ chế controlled component
* Gán kiểu dữ liệu cho form inputs bằng TypeScript
* Biết cách xử lý sự kiện submit và validate đơn giản

---

## Nội dung chính

### 1. Tạo form trong React

Form React vẫn dùng cú pháp HTML, nhưng thay vì `value` và `onchange` tự xử lý như HTML thuần, ta phải **bind dữ liệu với state**.

#### Ví dụ:

```tsx
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tên:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên"
      />
      <button type="submit">Gửi</button>
    </form>
  );
}
```

---

### 2. Controlled Component là gì?

* Một input được gọi là **controlled** nếu giá trị của nó được điều khiển bởi `state`.
* Ưu điểm: Dễ kiểm soát, dễ validate, dễ đồng bộ hóa dữ liệu.
* Nhược điểm: Nếu form lớn có thể cần tách nhỏ logic.

---

### 3. Nhiều trường form

```tsx
function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="password" value={formData.password} onChange={handleChange} />
      <button>Đăng ký</button>
    </form>
  );
}
```

---

### 4. Gán kiểu cho `formData`

```ts
type FormData = {
  name: string;
  email: string;
  password: string;
};

const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  password: "",
});
```

---

### 5. Validate đơn giản

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (formData.name.trim() === "") {
    alert("Tên không được bỏ trống");
    return;
  }
  // Gửi dữ liệu
};
```

---

### 6. Radio, Checkbox, Select

```tsx
<select name="gender" value={formData.gender} onChange={handleChange}>
  <option value="">Chọn giới tính</option>
  <option value="male">Nam</option>
  <option value="female">Nữ</option>
</select>
```

```tsx
<input
  type="checkbox"
  name="agree"
  checked={formData.agree}
  onChange={(e) =>
    setFormData((prev) => ({ ...prev, agree: e.target.checked }))
  }
/>
```

---

## Bài tập

### Bài 1 – Form liên hệ

Tạo form có các trường: họ tên, email, nội dung. Khi submit, in kết quả ra console.

---

### Bài 2 – Form đăng ký

Tạo form có các trường: username, password, giới tính, checkbox “Đồng ý điều khoản”. Validate: không để trống và phải chọn giới tính.

---

### Bài 3 – Form cập nhật thông tin

Tạo form khởi tạo với dữ liệu user có sẵn (name, email). Cho phép cập nhật và in ra kết quả mới.

---

### Bài 4 – Form với radio và select

Tạo form cho phép người dùng chọn vai trò: “User” hoặc “Admin”. Tùy theo vai trò sẽ hiển thị các lựa chọn khác nhau.

---

### Bài 5 – Tạo custom hook useForm

Viết một custom hook `useForm<T>()` để quản lý form dữ liệu, thay vì khai báo từng state riêng.

