# Bài 03 - Hàm

## Mục tiêu bài học
- Hiểu khái niệm và lợi ích của việc sử dụng hàm
- Biết cách khai báo và gọi hàm trong JavaScript
- Phân biệt giữa hàm khai báo (function declaration) và hàm biểu thức (function expression)
- Làm quen với hàm mũi tên (arrow function)
- Biết truyền tham số và nhận giá trị trả về từ hàm

## Nội dung chính

### 1. Hàm là gì?
Hàm là một khối mã thực hiện một công việc cụ thể, có thể được gọi nhiều lần thay vì viết lại.

### 2. Cách khai báo hàm

#### a. Hàm khai báo (function declaration)
```js
function sayHello() {
  console.log("Hello!");
}
sayHello(); // Gọi hàm
```

#### b. Hàm biểu thức (function expression)
```js
const greet = function() {
  console.log("Hi there!");
};
greet();
```

#### c. Hàm mũi tên (arrow function)
```js
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));
```

### 3. Tham số và giá trị trả về
```js
function multiply(x, y) {
  return x * y;
}
let result = multiply(2, 5);
console.log(result); // 10
```

### 4. Giá trị mặc định của tham số
```js
function greet(name = "Khách") {
  console.log("Xin chào " + name);
}
greet(); // Xin chào Khách
```

### 5. Callback function (sẽ học kỹ hơn ở bài sau)
```js
function runLater(callback) {
  console.log("Chuẩn bị chạy...");
  callback();
}
runLater(() => console.log("Đã chạy xong"));
```

## Bài tập

### Bài 1 – Hàm tính tổng hai số
Viết một hàm có tên `sum` nhận vào hai số và trả về tổng của chúng.

---

### Bài 2 – Hàm kiểm tra số chẵn
Viết một hàm có tên `isEven` nhận vào một số và trả về `true` nếu là số chẵn, ngược lại `false`.

---

### Bài 3 – Tính diện tích hình tròn
Viết hàm `circleArea(radius)` nhận vào bán kính và trả về diện tích hình tròn theo công thức `π * r^2`.

---

### Bài 4 – Đếm số ký tự trong chuỗi
Viết hàm `countChars(str)` trả về độ dài của chuỗi được truyền vào.

---

### Bài 5 – In bảng cửu chương bằng hàm
Viết một hàm `bangCuuChuong(n)` in ra bảng cửu chương của số `n` từ 1 đến 10.
