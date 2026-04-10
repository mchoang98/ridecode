# Bài 06 - Callback

## Mục tiêu bài học

* Hiểu được callback function là gì và vì sao cần sử dụng
* Phân biệt callback với các hàm thông thường
* Biết cách truyền hàm làm tham số
* Áp dụng callback để viết mã linh hoạt và dễ mở rộng
* Làm quen với các hàm có sẵn trong JavaScript sử dụng callback (`setTimeout`, `map`, `filter`, v.v.)

---

## Nội dung chính

### 1. Callback là gì?

Callback là **hàm được truyền làm đối số cho một hàm khác** và được gọi lại ("callback") bên trong hàm đó.

➡ Callback thường dùng để:

* Trì hoãn xử lý (đợi 1 hành động xảy ra)
* Tái sử dụng logic
* Làm việc với bất đồng bộ (asynchronous)

---

### 2. Ví dụ cơ bản

```js
function greet(name, callback) {
  console.log("Xin chào " + name);
  callback(); // Gọi lại hàm callback
}

function done() {
  console.log("Gọi xong rồi nè!");
}

greet("Phú", done);
```

---

### 3. Hàm truyền callback tự định nghĩa

```js
function tinhToan(a, b, hamXuLy) {
  return hamXuLy(a, b);
}

function cong(x, y) {
  return x + y;
}

function nhan(x, y) {
  return x * y;
}

console.log(tinhToan(3, 4, cong)); // 7
console.log(tinhToan(3, 4, nhan)); // 12
```

---

### 4. Callback với hàm built-in

```js
let arr = [1, 2, 3, 4, 5];

// Dùng callback với map
let squared = arr.map(function(num) {
  return num * num;
});
console.log(squared); // [1, 4, 9, 16, 25]
```

---

### 5. Callback bất đồng bộ – `setTimeout`

```js
console.log("Bắt đầu");

setTimeout(() => {
  console.log("Đợi 2 giây rồi mới in");
}, 2000);

console.log("Kết thúc");
```

---

### 6. Viết callback bằng arrow function

```js
function saySomething(message, callback) {
  console.log(message);
  callback();
}

saySomething("Xin chào!", () => {
  console.log("Tôi là callback đây 😎");
});
```

---

## Bài tập

### Bài 1 – Viết hàm sử dụng callback

Tạo hàm `helloUser(name, callback)` để in ra lời chào và sau đó gọi callback để thông báo “Chào xong rồi!”.

---

### Bài 2 – Tính toán linh hoạt

Tạo hàm `calculate(a, b, operation)` và truyền vào các hàm như `add`, `subtract`, `multiply`.

---

### Bài 3 – Tìm số chẵn trong mảng

Viết hàm `locSoChan(arr, callback)` nhận một mảng và callback xử lý từng phần tử. Callback chỉ in các số chẵn.

---

### Bài 4 – Sử dụng setTimeout

Viết chương trình in ra “Bắt đầu”, sau 1 giây in ra “Đang xử lý…”, sau đó 2 giây sau nữa thì in ra “Hoàn tất”.

---

### Bài 5 – Mô phỏng gọi API

Viết hàm `fetchData(callback)` mô phỏng việc gọi API bằng `setTimeout`. Sau 2 giây, callback sẽ được gọi để hiển thị dữ liệu giả định `{name: "Alice", age: 20}`.

