# Bai17\_Props\_State

## Mục tiêu bài học

* Hiểu được Props là gì và cách truyền dữ liệu giữa các component
* Hiểu được State là gì và cách quản lý dữ liệu thay đổi theo thời gian
* Biết phân biệt khi nào dùng Props, khi nào dùng State
* Biết gán kiểu cho Props và State bằng TypeScript
* Thực hành viết component có Props và State

---

## Nội dung chính

### 1. Props là gì?

**Props** (viết tắt của "properties") là dữ liệu được **truyền từ component cha sang component con**.

Props là **readonly** – không được thay đổi bên trong component nhận.

#### Ví dụ:

```tsx
type WelcomeProps = {
  name: string;
  age: number;
};

function Welcome({ name, age }: WelcomeProps) {
  return <p>Chào {name}, bạn {age} tuổi.</p>;
}

// Sử dụng
<Welcome name="Phú" age={22} />
```

---

### 2. State là gì?

**State** là dữ liệu nội bộ bên trong component. Khi **state thay đổi**, component sẽ được re-render.

Dùng hook `useState` để tạo state:

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Giá trị: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
```

---

### 3. Props và State kết hợp

Component cha truyền dữ liệu qua props, component con có thể dùng state để xử lý nội bộ.

#### Ví dụ:

```tsx
type StudentProps = {
  name: string;
};

function Student({ name }: StudentProps) {
  const [score, setScore] = useState<number>(0);

  return (
    <div>
      <h3>{name}</h3>
      <p>Điểm: {score}</p>
      <button onClick={() => setScore(score + 1)}>+1 điểm</button>
    </div>
  );
}
```

---

### 4. Gợi ý kiểu dữ liệu trong TypeScript

| Kiểu dữ liệu | Dùng cho                        |
| ------------ | ------------------------------- |
| `string`     | Văn bản (tên, mô tả...)         |
| `number`     | Các số (điểm, tuổi...)          |
| `boolean`    | True/false (đã hoàn thành chưa) |
| `T[]`        | Mảng dữ liệu                    |
| `{}`         | Object phức tạp                 |

---

### 5. Truyền function qua props

Component cha có thể truyền function cho component con để xử lý sự kiện ngược lại.

```tsx
type ButtonProps = {
  onClick: () => void;
};

function CustomButton({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Nhấn đi</button>;
}

function App() {
  const handleClick = () => {
    alert("Bạn vừa click!");
  };

  return <CustomButton onClick={handleClick} />;
}
```

---

## Bài tập

### Bài 1 – Hello Component

Tạo component `Hello` nhận props `name`, `age`, hiển thị `Xin chào {name}, bạn {age} tuổi.`

---

### Bài 2 – Counter

Tạo component có nút tăng/giảm giá trị điểm. State ban đầu là `0`.

---

### Bài 3 – Component TodoItem

Tạo component `TodoItem` nhận `title`, `completed: boolean`, hiển thị checkbox và nội dung.

---

### Bài 4 – Truyền function qua props

Tạo component `Button` nhận props là `onClick`, nhấn nút sẽ thực hiện hành động do cha truyền vào.

---

### Bài 5 – Danh sách học viên

Tạo component cha chứa danh sách `students: string[]`, render ra nhiều `StudentCard` (props: name). Mỗi card có nút `Like`, lưu state `liked: boolean`.

