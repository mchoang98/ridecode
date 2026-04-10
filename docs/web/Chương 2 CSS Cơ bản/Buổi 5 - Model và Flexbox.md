# BUỔI 5 – BỐ CỤC WEB VỚI BOX MODEL & FLEXBOX

**Cách căn chỉnh và sắp xếp giao diện hiện đại**

---

## I. MỤC TIÊU BUỔI HỌC

* Hiểu được **Box Model** trong CSS là gì
* Biết dùng **Flexbox** để canh giữa, xếp hàng ngang/dọc
* Làm được bố cục đơn giản: **header - content - sidebar - footer**
* Ứng dụng Flexbox vào **trang cá nhân** đã làm

---

## II. BOX MODEL – MỖI THẺ HTML LÀ 1 CÁI HỘP

### 1. Cấu trúc "hộp" của một thẻ HTML:

```
+-----------------------------+
|         margin              |
|   +---------------------+   |
|   |     border          |   |
|   |   +-------------+   |   |
|   |   |  padding     |   |   |
|   |   | +---------+ |   |   |
|   |   | | content | |   |   |
|   |   | +---------+ |   |   |
|   |   +-------------+   |   |
|   +---------------------+   |
+-----------------------------+
```

### 2. Các phần của Box Model:

| Phần        | Mô tả                                   |
| ----------- | --------------------------------------- |
| **Content** | Nội dung thực của thẻ (văn bản, ảnh...) |
| **Padding** | Khoảng cách từ nội dung ra viền         |
| **Border**  | Đường viền của hộp                      |
| **Margin**  | Khoảng cách từ hộp này sang hộp khác    |

---

### 3. Ví dụ CSS:

```css
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
  padding: 20px;
  border: 2px solid blue;
  margin: 30px;
}
```

---

## III. FLEXBOX – BÍ KÍP CĂN CHỈNH DỄ DÀNG

### 1. Kích hoạt Flexbox:

```css
.container {
  display: flex;
}
```

> Bất cứ phần tử nào dùng `display: flex` đều trở thành một **hộp chứa linh hoạt**

---

### 2. Các hướng xếp (flex-direction)

```css
.container {
  display: flex;
  flex-direction: row; /* ngang (mặc định) */
}
```

| Giá trị  | Ý nghĩa   |
| -------- | --------- |
| `row`    | Xếp ngang |
| `column` | Xếp dọc   |

---

### 3. Căn giữa nội dung

```css
.container {
  display: flex;
  justify-content: center;   /* giữa theo chiều ngang */
  align-items: center;       /* giữa theo chiều dọc */
  height: 100vh;
}
```

---

### 4. Xếp đều, giãn cách

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

| `justify-content` | Căn theo chiều ngang       |
| ----------------- | -------------------------- |
| `flex-start`      | Dồn trái                   |
| `center`          | Giữa                       |
| `flex-end`        | Dồn phải                   |
| `space-between`   | Giãn đều                   |
| `space-around`    | Giãn đều + khoảng lề 2 bên |

---

## IV. ỨNG DỤNG FLEXBOX TẠO GIAO DIỆN TRANG WEB

### 1. Giao diện cơ bản:

```html
<div class="container">
  <div class="sidebar">Menu</div>
  <div class="content">Nội dung</div>
</div>
```

### 2. CSS dùng Flexbox:

```css
.container {
  display: flex;
}

.sidebar {
  width: 30%;
  background-color: #dfe6e9;
  padding: 20px;
}

.content {
  width: 70%;
  background-color: #b2bec3;
  padding: 20px;
}
```

---

## V. THỰC HÀNH

### **Bài 1 – Làm bố cục 4 phần**

Tạo file `bo-cuc.html` và `bo-cuc.css` với 4 phần:

| Phần                     | Màu nền đề xuất |
| ------------------------ | --------------- |
| Header (tiêu đề)         | Xanh đậm        |
| Sidebar (menu bên trái)  | Xám nhạt        |
| Content (nội dung chính) | Trắng           |
| Footer (chân trang)      | Tối             |

Gợi ý HTML:

```html
<div class="header">Header</div>
<div class="main">
  <div class="sidebar">Sidebar</div>
  <div class="content">Nội dung chính</div>
</div>
<div class="footer">Footer</div>
```

Gợi ý CSS:

```css
body {
  margin: 0;
  font-family: Arial;
}

.header, .footer {
  background-color: #2d3436;
  color: white;
  text-align: center;
  padding: 20px;
}

.main {
  display: flex;
}

.sidebar {
  width: 25%;
  background-color: #dfe6e9;
  padding: 20px;
}

.content {
  width: 75%;
  background-color: #ffffff;
  padding: 20px;
}

.footer {
  margin-top: auto;
}
```

---

## VI. TỔNG KẾT

| Kiến thức                     | Ý nghĩa                                        |
| ----------------------------- | ---------------------------------------------- |
| Box Model                     | Mọi thẻ HTML là hộp có margin, border, padding |
| Flexbox                       | Cách xếp bố cục ngang/dọc dễ dàng              |
| justify-content / align-items | Dùng để căn giữa, giãn đều                     |
| Giao diện chuẩn web           | header – sidebar – content – footer            |

---

## VII. CHUẨN BỊ BUỔI 6 – CSS NÂNG CAO: Button, Form, Hover, Responsive

* Tự thiết kế một **menu sidebar** bằng thẻ `<ul>`
* Tìm trang web đẹp, phân tích xem phần nào là flex / grid
* Chuẩn bị ảnh minh họa cho giao diện nếu muốn phối CSS đẹp

---

Nếu anh muốn:

* Em tạo bài tập nâng cao: responsive layout với `flex-wrap`, mobile-first
* Xuất toàn bộ file HTML + CSS mẫu để học sinh dùng thử
* Viết tiếp **Buổi 6 – CSS nâng cao: nút bấm, biểu mẫu, hiệu ứng hover**

