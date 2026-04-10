# Bai19\_Hooks

## Mục tiêu bài học

* Hiểu `React Hooks` là gì và tại sao cần dùng
* Biết cách sử dụng `useEffect` để xử lý các **side effects** (tác vụ phụ)
* Hiểu được vòng đời component khi dùng hook
* Biết sử dụng kết hợp `useEffect` và `useState`
* Hiểu cleanup function và khi nào nên dùng

---

## Nội dung chính

### 1. Hook là gì?

* Hooks là các hàm đặc biệt của React dùng trong **Function Component** để xử lý các logic như state, lifecycle, context,...
* Hai hook phổ biến nhất:

  * `useState`: quản lý state nội bộ
  * `useEffect`: thực hiện các tác vụ phụ (gọi API, timer, DOM, event...)

---

### 2. useEffect cơ bản

```tsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Component được mount!");

  return () => {
    console.log("Component bị unmount hoặc update");
  };
}, []);
```

#### Cú pháp:

```ts
useEffect(callback, [dependencies]);
```

* Chạy `callback` sau khi render lần đầu hoặc khi `dependencies` thay đổi
* Nếu `[]` là mảng rỗng → chỉ chạy một lần (giống `componentDidMount`)
* Nếu return function trong callback → sẽ chạy khi unmount (giống `componentWillUnmount`)

---

### 3. Ví dụ: Đếm số lần render

```tsx
function Counter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Giá trị count thay đổi:", count);
  }, [count]);

  return (
    <div>
      <p>Giá trị: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
```

---

### 4. Gọi API bằng useEffect

```tsx
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

---

### 5. Cleanup function

```tsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Interval đã được xóa");
  };
}, []);
```

---

## Bài tập

### Bài 1 – Gọi API hiển thị người dùng

Dùng `useEffect` để gọi API `https://jsonplaceholder.typicode.com/users` và hiển thị danh sách người dùng.

---

### Bài 2 – Đồng hồ số

Tạo component `Clock` hiển thị giờ hiện tại, cập nhật mỗi giây bằng `setInterval`.

---

### Bài 3 – Theo dõi chiều cao cửa sổ

Tạo component `WindowSize` dùng `useEffect` để lắng nghe sự kiện `resize`, hiển thị chiều rộng và chiều cao hiện tại.

---

### Bài 4 – Bộ đếm tự tăng

Tạo component tự động tăng `count` mỗi 1 giây. Dừng khi count ≥ 10.

---

### Bài 5 – Tìm kiếm theo API

Tạo input để người dùng nhập từ khóa. Mỗi lần từ khóa thay đổi, gọi API tìm kiếm tương ứng bằng `useEffect`.

