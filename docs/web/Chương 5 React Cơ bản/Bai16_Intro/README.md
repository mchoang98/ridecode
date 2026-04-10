# Bai16\_React\_Introduce

## Mục tiêu bài học

* Hiểu được cách kết hợp TypeScript với React
* Biết cách khởi tạo một dự án React + TypeScript chuẩn
* Hiểu cách định nghĩa component sử dụng TypeScript
* Phân biệt cách viết props và state trong React + TS
* Biết xử lý sự kiện và hiển thị danh sách trong môi trường TypeScript

---

## Nội dung chính

### 1. Tạo project React + TypeScript

Sử dụng `create-react-app` với template `--template typescript`:

```bash
npx create-react-app my-react-ts-app --template typescript
cd my-react-ts-app
npm start
```

Sau khi tạo, trong thư mục `src/` sẽ có các file `.tsx`, ví dụ: `App.tsx`, `index.tsx`.

---

### 2. File `.tsx` là gì?

* `.tsx` = TypeScript + JSX
* Cho phép viết JSX với kiểm tra kiểu dữ liệu (type checking) mạnh mẽ
* Giúp phát hiện lỗi sớm trong khi viết code

---

### 3. Viết component với TypeScript

#### a. Component đơn giản

```tsx
function Hello() {
  return <h1>Chào bạn đến với React + TS</h1>;
}
```

#### b. Component có props

```tsx
type HelloProps = {
  name: string;
};

function Hello({ name }: HelloProps) {
  return <h1>Xin chào, {name}</h1>;
}
```

Sử dụng:

```tsx
<Hello name="Phú" />
```

---

### 4. Sử dụng `useState` trong TypeScript

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Bạn đã nhấn: {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
```

---

### 5. Xử lý sự kiện

```tsx
function Clicker() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("Bạn đã nhấn nút!");
  };

  return <button onClick={handleClick}>Nhấn tôi</button>;
}
```

---

### 6. Render danh sách

```tsx
type Student = {
  id: number;
  name: string;
};

const students: Student[] = [
  { id: 1, name: "Phú" },
  { id: 2, name: "Linh" },
];

function StudentList() {
  return (
    <ul>
      {students.map((s) => (
        <li key={s.id}>{s.name}</li>
      ))}
    </ul>
  );
}
```

---

### 7. Cấu trúc thư mục chuẩn (đề xuất)

```
src/
├── components/
│   └── Hello.tsx
├── types/
│   └── index.ts
├── App.tsx
├── index.tsx
```

---

## Bài tập

### Bài 1 – Hello Component

Tạo component `Hello` nhận vào `name` và hiển thị `"Xin chào, {name}"`. Gán kiểu props bằng `type`.

---

### Bài 2 – Counter

Tạo component `Counter` có nút `+`, `-`, hiển thị số đếm. Dùng `useState<number>`.

---

### Bài 3 – Danh sách sản phẩm

Tạo mảng `products` gồm `{ id, name, price }`. Hiển thị ra `ul`, mỗi sản phẩm là 1 `li`.

---

### Bài 4 – Form người dùng

Tạo form với các ô: tên, email. Khi submit, hiển thị dữ liệu ra bên dưới. Dùng `useState`.

---

### Bài 5 – Xử lý props object

Tạo component `UserCard` nhận props là 1 object kiểu `User` gồm `name`, `email`, `age`, và hiển thị ra card thông tin.


