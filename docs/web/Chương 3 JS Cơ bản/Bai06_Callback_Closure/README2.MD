
# Bài 06a - Array Method 

## Mục tiêu bài học

* Ôn lại các thao tác cơ bản với mảng
* Hiểu rõ và sử dụng thành thạo các phương thức cao cấp của mảng như: `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`
* Biết kết hợp nhiều phương thức để xử lý dữ liệu mảng hiệu quả
* Phân biệt được từng phương thức nên dùng trong tình huống nào

---

## Nội dung chính

### 1. `map()` – biến đổi từng phần tử trong mảng

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6]
```

---

### 2. `filter()` – lọc ra các phần tử thoả mãn điều kiện

```js
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(x => x % 2 === 0);
console.log(even); // [2, 4]
```

---

### 3. `reduce()` – tính gộp toàn mảng về một giá trị

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10
```

---

### 4. `find()` – tìm phần tử đầu tiên thoả điều kiện

```js
let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

let user = users.find(u => u.id === 2);
console.log(user); // {id: 2, name: "B"}
```

---

### 5. `some()` – kiểm tra có ít nhất một phần tử đúng

```js
let nums = [1, 2, 3];
console.log(nums.some(x => x > 2)); // true
```

---

### 6. `every()` – kiểm tra tất cả phần tử có đúng không

```js
let nums = [2, 4, 6];
console.log(nums.every(x => x % 2 === 0)); // true
```

---

### 7. `sort()` – sắp xếp mảng

```js
let nums = [5, 1, 10];
nums.sort((a, b) => a - b); // Tăng dần
console.log(nums); // [1, 5, 10]

nums.sort((a, b) => b - a); // Giảm dần
console.log(nums); // [10, 5, 1]
```

---

## Bài tập

### Bài 1 – Biến đổi mảng

Cho mảng `[1, 2, 3, 4]`. Dùng `map()` để tạo mảng mới gồm bình phương các số.

---

### Bài 2 – Lọc tên có độ dài lớn hơn 4

Cho mảng tên `["Anna", "John", "Maria", "Tom"]`. Dùng `filter()` để lọc ra các tên dài hơn 4 ký tự.

---

### Bài 3 – Tính tổng tuổi

Cho mảng object:

```js
[
  {name: "A", age: 20},
  {name: "B", age: 25}
]
```

Dùng `reduce()` để tính tổng tuổi.

---

### Bài 4 – Kiểm tra điểm có rớt không

Cho mảng điểm `[6, 8, 7, 4]`. Dùng `some()` để kiểm tra có điểm nào dưới 5 không.

---

### Bài 5 – Tìm học sinh tên "Phú"

Cho danh sách học sinh là array of object. Dùng `find()` để tìm học sinh có tên "Phú".


