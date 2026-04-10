# Bài 1 - Giới thiệu về MySQL

## 🎓 **CHƯƠNG 1 – Bài 1: Giới thiệu về MySQL và hệ quản trị cơ sở dữ liệu**

---

### 🎯 **Mục tiêu bài học**

Sau bài này, học viên sẽ:

* Hiểu cơ bản về hệ quản trị cơ sở dữ liệu (RDBMS).
* Biết MySQL là gì, so với các hệ quản trị khác.
* Cài đặt được MySQL & MySQL Workbench.
* Thực hiện được kết nối cơ bản và thử câu lệnh đầu tiên.

---

### 🧠 **1. Khái niệm cơ bản**

#### 🔹 Database là gì?

> Là tập hợp có tổ chức của dữ liệu, được lưu trữ và truy xuất hiệu quả.

#### 🔹 DBMS là gì?

> **DBMS (Database Management System)** là phần mềm quản lý cơ sở dữ liệu.

#### 🔹 RDBMS là gì?

> **RDBMS (Relational Database Management System)** là dạng DBMS tổ chức dữ liệu theo **bảng (table)** và **mối quan hệ** giữa chúng.

---

### 🛠 **2. MySQL là gì?**

* Một hệ quản trị cơ sở dữ liệu mã nguồn mở, phổ biến nhất hiện nay.
* Sử dụng ngôn ngữ SQL (**Structured Query Language**).
* Ưu điểm: nhanh, nhẹ, dễ dùng, cộng đồng lớn.
* Dùng nhiều trong các hệ thống web như: WordPress, Laravel, PHP, Python (Flask, Django)...

---

### 💬 **3. So sánh MySQL với các RDBMS khác**

| Tên        | Nguồn mở | Hiệu năng      | Dùng phổ biến ở         |
| ---------- | -------- | -------------- | ----------------------- |
| **MySQL**  | ✅        | Cao            | Web/app                 |
| PostgreSQL | ✅        | Cao, chuẩn hóa | Fintech, AI             |
| SQL Server | ❌        | Trung bình     | Hệ thống nội bộ Windows |
| Oracle     | ❌        | Rất cao        | Doanh nghiệp lớn        |

---

### 💻 **4. Cài đặt MySQL và Workbench**

#### 🔹 Hướng dẫn:

1. Truy cập: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)
2. Tải: **MySQL Installer** cho Windows
3. Cài: MySQL Server + MySQL Workbench
4. Đặt mật khẩu cho `root` user

📌 *Ghi chú: nên dùng bản MySQL 8.x trở lên.*

---

### 💻 **5. Giao diện làm việc**

* **Workbench**: giao diện trực quan
* **Command Line**: truy cập bằng `mysql -u root -p`

Ví dụ:

```bash
mysql -u root -p
```

```sql
SHOW DATABASES;
```

---

### ✅ **6. Thực hành**

**Bài tập:**


# Bài 1 - BT Giới thiệu về MySQL

**Giới thiệu về MySQL và hệ quản trị cơ sở dữ liệu**

---

**Bài 1 – Đăng nhập vào MySQL**
Yêu cầu: Mở MySQL Workbench hoặc cửa sổ dòng lệnh và đăng nhập vào hệ quản trị cơ sở dữ liệu bằng tài khoản `root`.
Gợi ý: Nếu dùng dòng lệnh, bạn cần nhập đúng tên người dùng và mật khẩu để truy cập.

---

**Bài 2 – Xem danh sách các cơ sở dữ liệu**
Yêu cầu: Hiển thị toàn bộ danh sách các cơ sở dữ liệu có trong hệ thống MySQL.
Gợi ý: Sử dụng câu lệnh để liệt kê database hiện có.

---

**Bài 3 – Tạo cơ sở dữ liệu mới**
Yêu cầu: Tạo một cơ sở dữ liệu có tên là `school` để lưu thông tin trường học.
Gợi ý: Sử dụng câu lệnh tạo database. Chú ý đặt tên không có dấu cách.

---

**Bài 4 – Chọn cơ sở dữ liệu để làm việc**
Yêu cầu: Sau khi tạo database `school`, bạn cần chọn nó làm cơ sở dữ liệu mặc định để làm việc.
Gợi ý: Có một câu lệnh dùng để chuyển sang một cơ sở dữ liệu đã tạo.

---

**Bài 5 – Tạo bảng học sinh**
Yêu cầu: Tạo bảng có tên `students` gồm 3 cột: `id` (số nguyên), `full_name` (chuỗi ký tự), và `age` (số nguyên).
Gợi ý: Chọn kiểu dữ liệu phù hợp với từng loại thông tin: số nguyên, chuỗi văn bản, tuổi,...

---

**Bài 6 – Thêm một học sinh mới vào bảng**
Yêu cầu: Thêm một học sinh bất kỳ vào bảng `students`. Bạn có thể tự đặt ID, họ tên và tuổi cho học sinh đó.
Gợi ý: Dùng lệnh thêm dữ liệu vào bảng đã tạo ở bài trước.

---

**Bài 7 – Kiểm tra dữ liệu đã thêm**
Yêu cầu: Hiển thị toàn bộ nội dung hiện có trong bảng `students`.
Gợi ý: Thực hiện một truy vấn để hiển thị tất cả các hàng dữ liệu trong bảng.

---

**Bài 8 – Tạo bảng giáo viên**
Yêu cầu: Tạo bảng mới có tên là `teachers` với các cột: `id`, `name`, `subject`.
Gợi ý: Đặt tên bảng và cột rõ ràng, chọn kiểu dữ liệu hợp lý (chuỗi cho tên và môn học).

---

**Bài 9 – Thêm dữ liệu vào bảng giáo viên**
Yêu cầu: Thêm ít nhất hai giáo viên vào bảng `teachers`, mỗi người có tên và môn học riêng.
Gợi ý: Có thể thêm từng người một hoặc thêm nhiều người cùng lúc.

---

**Bài 10 – Tìm hiểu lỗi khi tạo bảng trùng tên**
Yêu cầu: Thử tạo lại bảng `students`. Quan sát thông báo lỗi và tìm hiểu nguyên nhân. Sau đó, khắc phục để bảng có thể được tạo lại.
Gợi ý: Tìm hiểu lỗi “table already exists” và cách xóa bảng hoặc kiểm tra sự tồn tại trước khi tạo.






