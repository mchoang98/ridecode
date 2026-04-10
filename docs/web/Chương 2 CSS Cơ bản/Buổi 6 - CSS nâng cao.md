# BUỔI 6 – CSS NÂNG CAO

**Button, Biểu mẫu, Hiệu ứng Hover & Responsive**

---

## I. MỤC TIÊU BUỔI HỌC

* Biết cách tạo và trang trí **nút bấm (button)** bằng CSS
* Tạo **form nhập liệu** cơ bản với các thẻ `<input>`, `<textarea>`, `<label>`
* Dùng **hover effect** để tăng tương tác
* Làm quen với **responsive design** – giúp web hiển thị tốt trên điện thoại

---

## II. TẠO NÚT BẤM – BUTTON

### 1. Thẻ `<button>` hoặc `<a>`

```html
<button>Gửi</button>

<a href="#" class="btn">Xem thêm</a>
```

### 2. Trang trí nút bằng CSS

```css
button, .btn {
  background-color: #0984e3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}
```

---

## III. HIỆU ỨNG HOVER – KHI RÊ CHUỘT VÀO

```css
button:hover, .btn:hover {
  background-color: #74b9ff;
  transform: scale(1.05);
  transition: all 0.3s ease;
}
```

> `:hover` là **pseudo-class**, chỉ kích hoạt khi người dùng đưa chuột vào phần tử

---

## IV. FORM – BIỂU MẪU NHẬP LIỆU

### 1. Cấu trúc form HTML cơ bản

```html
<form>
  <label for="name">Họ tên:</label>
  <input type="text" id="name" placeholder="Nhập họ tên...">

  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Nhập email...">

  <label for="message">Tin nhắn:</label>
  <textarea id="message" placeholder="Nhập nội dung..."></textarea>

  <button type="submit">Gửi</button>
</form>
```

---

### 2. Trang trí form bằng CSS

```css
form {
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}
```

---

## V. RESPONSIVE – GIAO DIỆN TỰ CO GIÃN

### 1. Media Query cơ bản

```css
@media (max-width: 768px) {
  .main {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .content {
    width: 100%;
  }
}
```

> Khi chiều rộng nhỏ hơn 768px (thiết bị di động), bố cục chuyển sang xếp dọc

---

### 2. Ví dụ responsive nút:

```css
button {
  width: 200px;
}

@media (max-width: 500px) {
  button {
    width: 100%;
    font-size: 18px;
  }
}
```

---

## VI. BÀI TẬP ÁP DỤNG

### Bài 1 – `form-lien-he.html`

* Tạo 1 trang liên hệ gồm:

  * Họ tên
  * Email
  * Nội dung
  * Nút "Gửi liên hệ"
* Sử dụng CSS để:

  * Trang trí đẹp
  * Hiệu ứng hover cho nút
  * Responsive (hiển thị tốt trên điện thoại)

---

### Bài 2 – `button-demo.html`

* Tạo 3 nút: Đỏ, Xanh, Vàng
* Mỗi nút có màu riêng, hiệu ứng hover riêng
* Nút có thể là `<button>` hoặc `<a href="#">`

---

## VII. TỔNG KẾT BUỔI 6

| Kiến thức      | Ứng dụng                                 |
| -------------- | ---------------------------------------- |
| Button & hover | Tăng tương tác người dùng                |
| Form           | Thu thập thông tin từ người dùng         |
| Responsive     | Web hoạt động tốt trên điện thoại        |
| Media query    | CSS tự thay đổi theo kích thước màn hình |

---

## VIII. CHUẨN BỊ BUỔI 7 – LÀM TRANG WEB HOÀN CHỈNH

* Thiết kế lại **trang cá nhân** với bố cục rõ ràng
* Thêm **form liên hệ** vào cuối trang
* Trang trí toàn bộ bằng CSS + hover + responsive

