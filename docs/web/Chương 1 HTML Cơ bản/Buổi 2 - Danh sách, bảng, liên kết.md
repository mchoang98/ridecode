# BUỔI 2 – HTML MỞ RỘNG

**Danh sách, bảng, ảnh, liên kết**

---

## I. MỤC TIÊU BUỔI HỌC

* Sử dụng được các thẻ HTML phổ biến trong website: danh sách, bảng, hình ảnh, liên kết
* Biết cách trình bày nội dung theo nhóm, dạng bảng, hiển thị ảnh và điều hướng trang
* Làm quen cách kết nối nội dung web với các trang bên ngoài

---

## II. DANH SÁCH – LIST

HTML có hai loại danh sách:

### 1. Danh sách không thứ tự – `ul` (unordered list)

Dùng để liệt kê những thứ **không cần theo thứ tự cụ thể**:

```html
<ul>
  <li>Chơi thể thao</li>
  <li>Nghe nhạc</li>
  <li>Vẽ tranh</li>
</ul>
```

> Kết quả: hiện ra danh sách có dấu chấm tròn (•) đứng trước mỗi mục.

---

### 2. Danh sách có thứ tự – `ol` (ordered list)

Dùng khi **các bước hoặc thứ tự là quan trọng**:

```html
<ol>
  <li>Bật máy tính</li>
  <li>Mở VS Code</li>
  <li>Viết code HTML</li>
</ol>
```

> Kết quả: hiện danh sách được đánh số (1, 2, 3...)

---

### Ghi chú:

* Mỗi mục trong danh sách luôn phải nằm trong thẻ `<li>`
* `ul` + `li` thường dùng cho menu, danh sách sở thích
* `ol` + `li` dùng cho hướng dẫn, các bước

---

## III. BẢNG – TABLE

Bảng giúp **trình bày dữ liệu dạng hàng-cột**, rất tiện để hiển thị thông tin, thời khóa biểu, điểm số...

### Cấu trúc cơ bản:

```html
<table border="1">
  <tr>
    <th>Tên</th>
    <th>Tuổi</th>
  </tr>
  <tr>
    <td>Nam</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Lan</td>
    <td>14</td>
  </tr>
</table>
```

### Giải thích các thẻ:

| Thẻ       | Vai trò                         |
| --------- | ------------------------------- |
| `<table>` | Bao toàn bộ bảng                |
| `<tr>`    | Một hàng trong bảng (table row) |
| `<th>`    | Tiêu đề cột (table heading)     |
| `<td>`    | Ô dữ liệu (table data)          |

---

### Các thuộc tính bổ sung (tùy chọn):

| Thuộc tính    | Chức năng      |
| ------------- | -------------- |
| `border="1"`  | Viền bảng      |
| `colspan="2"` | Ô chiếm 2 cột  |
| `rowspan="2"` | Ô chiếm 2 hàng |

---

## IV. HÌNH ẢNH – IMAGE

HTML dùng thẻ `<img>` để chèn ảnh vào trang.

### Cú pháp:

```html
<img src="https://via.placeholder.com/150" alt="Ảnh đại diện">
```

### Giải thích:

| Thuộc tính | Ý nghĩa                                            |
| ---------- | -------------------------------------------------- |
| `src`      | Đường dẫn tới ảnh (có thể là URL hoặc file local)  |
| `alt`      | Văn bản hiển thị khi ảnh lỗi hoặc để mô tả cho SEO |

> Gợi ý ảnh mẫu: dùng [https://via.placeholder.com/150](https://via.placeholder.com/150)

---

## V. LIÊN KẾT – ANCHOR

Thẻ `<a>` dùng để tạo **đường dẫn đến trang khác**.

### 1. Liên kết cơ bản:

```html
<a href="https://google.com">Truy cập Google</a>
```

### 2. Liên kết mở ở tab mới:

```html
<a href="https://facebook.com" target="_blank">Trang Facebook</a>
```

| Thuộc tính        | Ý nghĩa                                          |
| ----------------- | ------------------------------------------------ |
| `href`            | Đường dẫn trang cần mở                           |
| `target="_blank"` | Mở trong tab mới thay vì thay thế trang hiện tại |

---

## VI. BÀI TẬP THỰC HÀNH

### 1. `so-thich.html`

* Tiêu đề: “Sở thích của tôi”
* Danh sách `ul` liệt kê ít nhất 5 sở thích
* Thêm một hình ảnh minh họa

### 2. `bang-thong-tin.html`

* Tiêu đề: “Thông tin cá nhân”
* Bảng có ít nhất 3 hàng: Họ tên, Tuổi, Lớp
* Sử dụng thẻ `<table>`, `<tr>`, `<td>`, `<th>`

### 3. `lien-ket.html`

* Liên kết đến 3 trang web bạn thường dùng để học
* Mỗi liên kết mở ra ở tab mới
* Ví dụ: Google, YouTube, W3Schools...

---

## VII. TỔNG KẾT BUỔI 2

| Bạn đã học                 | Áp dụng thực tế               |
| -------------------------- | ----------------------------- |
| Danh sách `ul`, `ol`, `li` | Tạo menu, sở thích, quy trình |
| Bảng `table`, `tr`, `td`   | Hiển thị thông tin, dữ liệu   |
| Hình ảnh `img`             | Chèn ảnh minh họa, avatar     |
| Liên kết `a`               | Điều hướng đến trang khác     |

---

## CHUẨN BỊ BUỔI 3

* Tìm 1 ảnh avatar bạn muốn dùng cho trang cá nhân
* Suy nghĩ nội dung cho một **trang web cá nhân** gồm: giới thiệu, sở thích, hình ảnh và liên hệ

