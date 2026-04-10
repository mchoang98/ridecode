# BUỔI 4 – CSS CƠ BẢN

**Trang trí website với màu sắc, phông chữ và file CSS**

---

## I. MỤC TIÊU BUỔI HỌC

* Hiểu CSS là gì và tại sao cần CSS trong web
* Biết 3 cách viết CSS và chọn cách phù hợp
* Biết thay đổi **màu nền**, **màu chữ**, **cỡ chữ**, **phông chữ**
* Áp dụng CSS để **trang trí trang cá nhân** đã làm ở Buổi 3

---

## II. CSS LÀ GÌ?

* **CSS** (Cascading Style Sheets) là ngôn ngữ **dùng để làm đẹp** cho trang web.
* Nếu **HTML là “bộ xương”**, thì **CSS là “quần áo”** của trang web.

---

## III. 3 CÁCH VIẾT CSS

### 1. **Inline CSS** – Viết trực tiếp vào thẻ HTML

👉 Không khuyến khích vì **rối và khó sửa**

```html
<p style="color: red;">Đoạn văn màu đỏ</p>
```

---

### 2. **Internal CSS** – Viết trong thẻ `<style>` trong file HTML

👉 Dùng cho các trang nhỏ

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

---

### 3. **External CSS** – Viết trong file `.css` riêng

👉 Đây là cách **chuyên nghiệp nhất**

```html
<!-- Trong HTML -->
<link rel="stylesheet" href="style.css">
```

```css
/* Trong file style.css */
p {
  color: green;
}
```

> **=> Ta sẽ dùng cách 3 cho dự án sau này.**

---

## IV. CÁCH KẾT NỐI CSS VÀO HTML

### Bước 1: Tạo file HTML như bình thường

Ví dụ: `trang-ca-nhan.html`

### Bước 2: Tạo file CSS cùng thư mục

Ví dụ: `style.css`

### Bước 3: Gắn link CSS trong phần `<head>` của HTML

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

---

## V. THUỘC TÍNH CƠ BẢN CỦA CSS

### 1. **color** – Màu chữ

```css
p {
  color: red;
}
```

Hoặc dùng mã màu:

```css
p {
  color: #3498db;
}
```

---

### 2. **background-color** – Màu nền

```css
body {
  background-color: #f0f0f0;
}
```

---

### 3. **font-size** – Kích thước chữ

```css
h1 {
  font-size: 32px;
}
```

---

### 4. **font-family** – Phông chữ

```css
body {
  font-family: Arial, sans-serif;
}
```

> Gợi ý: các font dễ đọc như `Arial`, `Verdana`, `Tahoma`, `sans-serif`

---

### 5. **text-align** – Căn lề chữ

```css
h1 {
  text-align: center;
}
```

---

## VI. CLASS & ID – GẮN CSS VÀO THẺ CỤ THỂ

### 1. Sử dụng `class`

HTML:

```html
<p class="doan-gioi-thieu">Tôi là học sinh lớp 9.</p>
```

CSS:

```css
.doan-gioi-thieu {
  color: purple;
  font-style: italic;
}
```

> Dấu `.` trước tên class

---

### 2. Sử dụng `id`

HTML:

```html
<h1 id="tieu-de">Trang cá nhân</h1>
```

CSS:

```css
#tieu-de {
  font-size: 40px;
  color: darkblue;
}
```

> Dấu `#` trước tên ID

---

## VII. BÀI TẬP ÁP DỤNG

### **Bài 1 – Tạo file `style.css` cho `trang-ca-nhan.html`**

Yêu cầu:

* Nền trang có màu nhẹ
* Tên hiển thị bằng màu đậm, căn giữa, size lớn
* Nội dung đoạn văn: chữ đen, font dễ đọc
* Danh sách sở thích: màu chữ khác, in nghiêng
* Bảng thông tin: viền rõ ràng, phông khác với tiêu đề
* Liên kết có màu riêng, khi hover đổi màu

---

## GỢI Ý CSS CHO BÀI TẬP:

```css
body {
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  color: #2c3e50;
  text-align: center;
  font-size: 36px;
}

ul {
  color: #6c5ce7;
  font-style: italic;
}

table {
  border-collapse: collapse;
  width: 60%;
  margin: 0 auto;
}

table, th, td {
  border: 1px solid #aaa;
  padding: 10px;
}

a {
  color: #2980b9;
  text-decoration: none;
}

a:hover {
  color: #e74c3c;
}
```

---

## VIII. TỔNG KẾT

| Kiến thức             | Bạn đã học gì?                                                        |
| --------------------- | --------------------------------------------------------------------- |
| CSS là gì             | Ngôn ngữ trang trí giao diện web                                      |
| 3 cách viết CSS       | Inline, Internal, External                                            |
| Các thuộc tính cơ bản | `color`, `background-color`, `font-size`, `font-family`, `text-align` |
| Dùng class / id       | Gắn style riêng cho từng thẻ cụ thể                                   |

---

## IX. CHUẨN BỊ BUỔI 5 – FLEXBOX VÀ BỐ CỤC GIAO DIỆN

* Đọc trước về **Box Model** và **Flexbox**
* Quan sát bố cục các trang web đẹp: phần header, sidebar, nội dung chính, footer
* Mang theo thiết kế mẫu (nếu có) để thử tái tạo


