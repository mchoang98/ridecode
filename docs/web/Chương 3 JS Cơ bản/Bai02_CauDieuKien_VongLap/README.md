# Bài 02 - Câu lệnh điều kiện, vòng lặp

## Mục tiêu bài học
- Hiểu được cấu trúc điều kiện `if`, `else if`, `else` trong JavaScript
- Nắm được cú pháp và cách sử dụng của các vòng lặp: `for`, `while`, `do...while`
- Phân biệt được khi nào dùng loại vòng lặp nào
- Biết sử dụng lệnh `break`, `continue` trong vòng lặp

## Nội dung chính

### 1. Câu lệnh điều kiện

#### Cấu trúc `if - else`
```js
let age = 20;
if (age >= 18) {
  console.log("Đủ tuổi");
} else {
  console.log("Chưa đủ tuổi");
}
```

#### `else if` – phân nhánh nhiều điều kiện
```js
let score = 8;
if (score >= 9) {
  console.log("Xuất sắc");
} else if (score >= 7) {
  console.log("Khá");
} else {
  console.log("Trung bình hoặc yếu");
}
```

#### Toán tử ba ngôi (ternary)
```js
let result = (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
```

### 2. Vòng lặp

#### Vòng lặp `for`
```js
for (let i = 1; i <= 5; i++) {
  console.log("Lần lặp thứ: " + i);
}
```

#### Vòng lặp `while`
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

#### Vòng lặp `do...while`
```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

#### Lệnh `break` và `continue`
```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  if (i % 2 === 0) continue;
  console.log(i); // In số lẻ nhỏ hơn 5
}
```

## Bài tập

### Bài 1 – Kiểm tra điểm học lực
Yêu cầu người dùng nhập điểm (0–10). In ra học lực theo điều kiện:
- Giỏi: >= 8
- Khá: >= 6.5
- Trung bình: >= 5
- Yếu: < 5

---

### Bài 2 – In bảng cửu chương của một số
Nhập một số từ 1 đến 9, in ra bảng cửu chương của số đó (sử dụng vòng lặp `for`).

---

### Bài 3 – Tính tổng từ 1 đến n
Nhập số nguyên dương `n`, tính tổng các số từ 1 đến `n` bằng vòng lặp `while`.

---

### Bài 4 – Đếm số chẵn trong đoạn 1–100
Viết chương trình đếm có bao nhiêu số chẵn từ 1 đến 100.

---

### Bài 5 – Đoán số bí mật
Tạo một số ngẫu nhiên từ 1 đến 10. Cho phép người dùng đoán tối đa 3 lần bằng vòng lặp. Nếu đoán đúng thì kết thúc sớm.
