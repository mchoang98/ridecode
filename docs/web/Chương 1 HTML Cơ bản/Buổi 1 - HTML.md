Dưới đây là **Bài 1: HTML là gì? Viết trang đầu tiên** được viết chi tiết hơn, dành cho học sinh mới bắt đầu, có giải thích kỹ từng phần và ví dụ cụ thể:

---

# BÀI 1 – HTML LÀ GÌ? VIẾT TRANG ĐẦU TIÊN

---

## I. MỤC TIÊU BUỔI HỌC

* Biết HTML là gì và dùng để làm gì
* Hiểu cấu trúc cơ bản của một trang web viết bằng HTML
* Biết cách tạo, lưu và mở file HTML trên máy tính
* Biết sử dụng các thẻ HTML đơn giản để hiển thị nội dung

---

## II. HTML LÀ GÌ?

### 1. Khái niệm cơ bản:

**HTML** là viết tắt của **HyperText Markup Language** – tạm dịch là *Ngôn ngữ đánh dấu siêu văn bản*.

> HTML không phải là ngôn ngữ lập trình. Nó không có “tính toán” hay “điều kiện”. HTML chỉ có nhiệm vụ **mô tả cấu trúc nội dung của trang web**.

Ví dụ: Khi bạn mở một trang web, mọi phần như **tiêu đề**, **đoạn văn**, **hình ảnh**, **nút bấm**… đều được tạo ra từ HTML.

---

### 2. HTML hoạt động như thế nào?

* HTML **không cần cài đặt phần mềm riêng** để chạy.
* Chỉ cần tạo một file `.html` → Mở bằng trình duyệt (Chrome, Edge, Firefox...) → Thấy kết quả ngay.

---

## III. CẤU TRÚC CƠ BẢN CỦA FILE HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tiêu đề trang</title>
  </head>
  <body>
    <h1>Xin chào!</h1>
    <p>Đây là dòng đầu tiên trong trang web của tôi.</p>
  </body>
</html>
```

### Giải thích:

| Phần               | Vai trò                                        |
| ------------------ | ---------------------------------------------- |
| `<!DOCTYPE html>`  | Khai báo đây là file HTML5                     |
| `<html>...</html>` | Gói toàn bộ nội dung trang web                 |
| `<head>...</head>` | Chứa thông tin "ẩn" (tiêu đề, link, meta...)   |
| `<title>`          | Tên hiển thị trên tab trình duyệt              |
| `<body>...</body>` | Nơi chứa nội dung chính hiển thị trên màn hình |

---

## IV. CÁC THẺ HTML ĐẦU TIÊN CẦN BIẾT

### 1. Tiêu đề – Heading

```html
<h1>Tiêu đề lớn nhất</h1>
<h2>Tiêu đề cấp 2</h2>
<h6>Tiêu đề nhỏ nhất</h6>
```

### 2. Đoạn văn – Paragraph

```html
<p>Đây là một đoạn văn bản giới thiệu về bản thân tôi.</p>
```

### 3. Hình ảnh – Image

```html
<img src="https://via.placeholder.com/150" alt="Ảnh mẫu">
```

### 4. Liên kết – Anchor

```html
<a href="https://facebook.com" target="_blank">Trang Facebook của tôi</a>
```

### 5. Danh sách – List

```html
<ul>
  <li>Lập trình</li>
  <li>Chơi thể thao</li>
</ul>

<ol>
  <li>Bước 1: Mở VS Code</li>
  <li>Bước 2: Tạo file HTML</li>
</ol>
```

---

## V. TẠO FILE HTML & CHẠY TRÊN TRÌNH DUYỆT

### Bước 1: Mở VS Code (hoặc Notepad)

### Bước 2: Dán đoạn mã sau vào:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Trang giới thiệu</title>
  </head>
  <body>
    <h1>Tôi là An</h1>
    <p>Mình là học sinh lớp 9, thích học lập trình.</p>
  </body>
</html>
```

### Bước 3: Lưu file

* Nhấn `Ctrl + S`
* Đặt tên: `gioi-thieu.html`
* Chọn nơi lưu: Desktop hoặc thư mục riêng

### Bước 4: Mở file bằng trình duyệt

* Nhấn đúp chuột vào file `gioi-thieu.html`
* Hoặc click chuột phải > Chọn **Open with** > **Google Chrome**

---

## VI. BÀI TẬP THỰC HÀNH

### Bài 1 – Tạo trang giới thiệu bản thân

Tạo file `gioi-thieu.html` với nội dung:

* Tiêu đề tên bạn (dùng `<h1>`)
* Một đoạn văn ngắn mô tả bạn là ai
* Một hình ảnh avatar (dùng ảnh trên mạng, `img src`)
* Một liên kết tới Facebook của bạn (hoặc một trang bất kỳ)

---

## VII. TỔNG KẾT

| Bạn đã học được gì?     | Ví dụ                                    |
| ----------------------- | ---------------------------------------- |
| HTML là gì              | Ngôn ngữ tạo cấu trúc trang web          |
| Viết file HTML đầu tiên | `index.html`, `gioi-thieu.html`          |
| Sử dụng thẻ cơ bản      | `<h1>`, `<p>`, `<img>`, `<a>`, `<ul>`... |
| Cách lưu và chạy HTML   | Dùng trình duyệt để xem kết quả          |

---

**Chuyển tiếp sang buổi 2**, chúng ta sẽ học về **danh sách, bảng, hình ảnh chi tiết và cách tổ chức nội dung web**, sẵn sàng cho phần CSS.


