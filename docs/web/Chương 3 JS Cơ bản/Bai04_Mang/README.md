# Bài 04 - Mảng

## Mục tiêu bài học

* Hiểu khái niệm mảng và cách khai báo mảng trong JavaScript
* Truy cập phần tử mảng qua chỉ số
* Thao tác cơ bản với mảng: thêm, xóa, duyệt mảng
* Sử dụng các phương thức mảng phổ biến như: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`
* Hiểu và áp dụng các hàm duyệt mảng: `for`, `forEach`, `map`, `filter`

---

## Nội dung chính

### 1. Khai báo mảng

```js
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Táo", "Chuối", "Xoài"];
```

### 2. Truy cập và thay đổi phần tử

```js
console.log(fruits[0]); // "Táo"
fruits[1] = "Lê"; // Thay "Chuối" bằng "Lê"
```

### 3. Các phương thức làm việc với mảng

| Phương thức | Mô tả                                    |
| ----------- | ---------------------------------------- |
| `push()`    | Thêm phần tử vào cuối mảng               |
| `pop()`     | Xoá phần tử cuối mảng                    |
| `unshift()` | Thêm phần tử vào đầu mảng                |
| `shift()`   | Xoá phần tử đầu mảng                     |
| `splice()`  | Xoá, thêm hoặc thay thế phần tử          |
| `slice()`   | Cắt một đoạn của mảng và trả về mảng mới |

Ví dụ:

```js
let arr = [1, 2, 3, 4, 5];
arr.push(6);     // [1, 2, 3, 4, 5, 6]
arr.pop();       // [1, 2, 3, 4, 5]
arr.splice(2, 1); // Xoá phần tử tại index 2 -> [1, 2, 4, 5]
```

---

### 4. Duyệt mảng

#### a. Dùng vòng `for`

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### b. Dùng `forEach()`

```js
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

#### c. Dùng `map()`

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

#### d. Dùng `filter()`

```js
let evens = numbers.filter(num => num % 2 === 0); // Lọc số chẵn
```

---

## Bài tập

### Bài 1 – Tạo danh sách học sinh

Khai báo một mảng chứa tên 5 học sinh. In ra từng học sinh bằng vòng `for`.

---

### Bài 2 – Tính tổng các phần tử

Viết chương trình tính tổng các số trong mảng `[1, 2, 3, 4, 5]`.

---

### Bài 3 – Lọc số chẵn từ mảng

Viết hàm nhận vào một mảng số nguyên, trả về mảng mới chỉ chứa các số chẵn.

---

### Bài 4 – Tìm phần tử lớn nhất

Viết chương trình tìm phần tử lớn nhất trong mảng `[10, 5, 8, 20, 3]`.

---

### Bài 5 – Xoá phần tử theo chỉ số

Viết chương trình xóa phần tử tại vị trí index được nhập vào từ mảng `[1, 2, 3, 4, 5]`.


