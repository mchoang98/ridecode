# BUỔI 3 – TẠO TRANG CÁ NHÂN

**Tổng hợp kiến thức HTML cơ bản**

---

## I. MỤC TIÊU BUỔI HỌC

* Ôn tập và củng cố các thẻ HTML đã học
* Tự tạo một **trang cá nhân đầy đủ** gồm: giới thiệu, hình ảnh, sở thích, thông tin cá nhân, liên kết
* Biết cách **tổ chức nội dung hợp lý**
* Chuẩn bị để **tách phần nội dung (HTML) và phần trang trí (CSS)** ở các buổi sau

---

## II. THIẾT KẾ TRANG CÁ NHÂN

### Cấu trúc nội dung cần có:

| Phần nội dung                                  | Thẻ HTML cần dùng  |
| ---------------------------------------------- | ------------------ |
| Tiêu đề lớn tên học sinh                       | `<h1>`             |
| Ảnh đại diện                                   | `<img>`            |
| Giới thiệu bản thân                            | `<p>`              |
| Danh sách sở thích                             | `<ul>` hoặc `<ol>` |
| Thông tin cá nhân                              | `<table>`          |
| Liên kết cá nhân (Facebook, YouTube, Gmail...) | `<a>`              |

---

### Mẫu bố cục gợi ý:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Trang cá nhân của An</title>
  </head>
  <body>
    <h1>Nguyễn Văn An</h1>

    <img src="https://via.placeholder.com/150" alt="Ảnh đại diện">

    <p>Xin chào! Mình là học sinh lớp 9, thích lập trình và học công nghệ.</p>

    <h2>Sở thích</h2>
    <ul>
      <li>Lập trình</li>
      <li>Chơi đá bóng</li>
      <li>Đọc sách</li>
    </ul>

    <h2>Thông tin cá nhân</h2>
    <table border="1">
      <tr>
        <th>Hạng mục</th>
        <th>Thông tin</th>
      </tr>
      <tr>
        <td>Họ và tên</td>
        <td>Nguyễn Văn An</td>
      </tr>
      <tr>
        <td>Lớp</td>
        <td>9A1</td>
      </tr>
      <tr>
        <td>Trường</td>
        <td>THCS ABC</td>
      </tr>
    </table>

    <h2>Liên hệ</h2>
    <p>
      <a href="https://facebook.com/an.dev" target="_blank">Facebook cá nhân</a><br>
      <a href="mailto:an@gmail.com">Email: an@gmail.com</a>
    </p>
  </body>
</html>
```

> Gợi ý: Học sinh có thể thay thế thông tin, đường link, hình ảnh theo ý mình để tạo cá tính riêng.

---

## III. HƯỚNG DẪN TỪNG BƯỚC

### Bước 1: Tạo file HTML

* Mở VS Code
* Tạo file tên: `trang-ca-nhan.html`

### Bước 2: Thêm phần tiêu đề và giới thiệu

```html
<h1>Trần Minh Khôi</h1>
<p>Mình là học sinh lớp 8, yêu thích công nghệ và vẽ truyện tranh.</p>
```

### Bước 3: Chèn ảnh đại diện

```html
<img src="https://via.placeholder.com/150" alt="Ảnh của Khôi">
```

> Dùng ảnh thật hoặc ảnh tạm từ `via.placeholder.com`

### Bước 4: Viết danh sách sở thích

```html
<h2>Sở thích</h2>
<ul>
  <li>Vẽ manga</li>
  <li>Chơi game giải đố</li>
  <li>Lập trình HTML</li>
</ul>
```

### Bước 5: Tạo bảng thông tin

```html
<h2>Thông tin cá nhân</h2>
<table border="1">
  <tr>
    <th>Hạng mục</th>
    <th>Chi tiết</th>
  </tr>
  <tr>
    <td>Họ tên</td>
    <td>Trần Minh Khôi</td>
  </tr>
  <tr>
    <td>Tuổi</td>
    <td>13</td>
  </tr>
  <tr>
    <td>Trường</td>
    <td>THCS XYZ</td>
  </tr>
</table>
```

### Bước 6: Thêm liên kết cá nhân

```html
<h2>Liên hệ</h2>
<a href="https://facebook.com/khoi" target="_blank">Facebook</a><br>
<a href="mailto:khoi@example.com">Email: khoi@example.com</a>
```

---

## IV. BÀI TẬP ÁP DỤNG

**Bài 1 – `trang-ca-nhan.html`:**

* Gồm tất cả nội dung trên
* Thông tin thật, hình ảnh cá nhân hoặc đại diện
* Có ít nhất:

  * 1 đoạn giới thiệu
  * 1 danh sách sở thích
  * 1 bảng thông tin
  * 2 liên kết cá nhân (mở tab mới)

---

## V. TỔNG KẾT

| Bạn đã vận dụng | Để làm gì                               |
| --------------- | --------------------------------------- |
| `<h1>` – `<h2>` | Tiêu đề rõ ràng, phân chia mục          |
| `<p>`           | Mô tả, viết giới thiệu cá nhân          |
| `<img>`         | Gắn ảnh đại diện hoặc ảnh minh họa      |
| `<ul>`/`<ol>`   | Sở thích, mục tiêu cá nhân              |
| `<table>`       | Trình bày thông tin gọn gàng            |
| `<a>`           | Tạo liên kết đến mạng xã hội hoặc email |

---

## VI. CHUẨN BỊ BUỔI 4 – BẮT ĐẦU CSS

* Ghi nhớ: HTML là **nội dung**
* CSS là **trang trí**
* Học sinh cần tải sẵn **ảnh nền đẹp** hoặc chọn bảng màu yêu thích để dùng khi học CSS

