Dưới đây là nội dung chi tiết cho **Bài 18 – Component và Render danh sách (List) trong React + TypeScript**, giúp học viên thực hành component lồng nhau và hiển thị danh sách dữ liệu một cách rõ ràng, có kiểu.

---

# Bai18\_Component\_List

## Mục tiêu bài học

* Ôn lại cách tạo component và truyền props
* Biết cách hiển thị danh sách dữ liệu với `.map()`
* Gán `key` đúng khi render list
* Định nghĩa kiểu dữ liệu cho item và props khi dùng TypeScript
* Biết cách chia nhỏ giao diện thành nhiều component tái sử dụng được

---

## Nội dung chính

### 1. Tạo Component đơn giản

```tsx
type UserProps = {
  name: string;
  age: number;
};

function UserCard({ name, age }: UserProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Tuổi: {age}</p>
    </div>
  );
}
```

---

### 2. Danh sách dữ liệu

Giả sử ta có một danh sách người dùng:

```tsx
const users = [
  { id: 1, name: "Phú", age: 22 },
  { id: 2, name: "Linh", age: 20 },
  { id: 3, name: "An", age: 19 },
];
```

Định nghĩa kiểu dữ liệu:

```ts
type User = {
  id: number;
  name: string;
  age: number;
};
```

---

### 3. Render danh sách bằng `.map()`

```tsx
function UserList() {
  const users: User[] = [
    { id: 1, name: "Phú", age: 22 },
    { id: 2, name: "Linh", age: 20 },
    { id: 3, name: "An", age: 19 },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}
```

> 🔥 Quan trọng: Luôn thêm `key={user.id}` khi dùng `.map()` để React quản lý tốt hơn hiệu năng.

---

### 4. Chia nhỏ component (Component Composition)

Thay vì xử lý hết trong 1 file, ta chia nhỏ thành nhiều file:

* `UserCard.tsx`
* `UserList.tsx`
* `App.tsx`

```tsx
// App.tsx
function App() {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <UserList />
    </div>
  );
}
```

---

### 5. Bổ sung thao tác tương tác (nâng cao)

```tsx
function UserCard({ name, age }: UserProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <h3>{name} ({age})</h3>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "Đã thích" : "Thích"}
      </button>
    </div>
  );
}
```

---

## Bài tập

### Bài 1 – Danh sách sản phẩm

Tạo mảng sản phẩm `products` gồm `id`, `name`, `price`. Hiển thị ra component `ProductItem`.

---

### Bài 2 – Danh sách sinh viên

Tạo mảng `students: Student[]`, mỗi item có `name`, `score`. Hiển thị ra danh sách với màu sắc theo điều kiện:

* score < 5: đỏ
* score >= 5: xanh

---

### Bài 3 – Danh sách Task

Tạo `TaskList` nhận vào mảng `tasks: { id, title, done }`. Hiển thị danh sách checkbox tương ứng.

---

### Bài 4 – Like từng item

Mỗi item có nút `Like`, khi bấm đổi trạng thái `liked`. Lưu state ở từng `ItemCard`.

---

### Bài 5 – Component lồng nhau

Tạo component `Classroom` gồm danh sách `students`, mỗi học sinh là 1 `StudentCard`. Mỗi `StudentCard` có nút `Đánh giá` → hiển thị `Good/Bad`.


