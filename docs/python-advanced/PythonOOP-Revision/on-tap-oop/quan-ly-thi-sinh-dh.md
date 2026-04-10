# BÀI TẬP 3 – QUẢN LÝ THÍ SINH DỰ THI ĐẠI HỌC

## Mục tiêu

Thiết kế hệ thống quản lý thí sinh thi đại học theo khối A, B, C, áp dụng lập trình hướng đối tượng (OOP) trong Python để tổ chức và xử lý dữ liệu một cách linh hoạt và mở rộng được.

## Mô tả bài toán

Mỗi thí sinh dự thi đại học sẽ thuộc một trong các khối:  
- **Khối A**: thi các môn Toán, Lý, Hóa  
- **Khối B**: thi các môn Toán, Hóa, Sinh  
- **Khối C**: thi các môn Văn, Sử, Địa  

Mỗi thí sinh cần quản lý các thông tin chung như:

- Số báo danh
- Họ tên
- Địa chỉ
- Mức ưu tiên

Và thông tin riêng theo khối thi.

---

## Yêu cầu thiết kế chương trình

### 1. Lớp `ThiSinh` (Lớp trừu tượng)

#### Thuộc tính:

- `so_bao_danh` (str)
- `ho_ten` (str)
- `dia_chi` (str)
- `muc_uu_tien` (int)

#### Phương thức:

- `hien_thi_thong_tin()` – abstract method, được ghi đè ở các lớp con

> Gợi ý: Dùng module `abc` để tạo abstract base class

---

### 2. Các lớp con kế thừa từ `ThiSinh`:

#### a. Lớp `ThiSinhKhoiA`

- Thuộc tính: `mon_thi = ["Toán", "Lý", "Hóa"]`
- Ghi đè phương thức `hien_thi_thong_tin()`

#### b. Lớp `ThiSinhKhoiB`

- Thuộc tính: `mon_thi = ["Toán", "Hóa", "Sinh"]`
- Ghi đè phương thức `hien_thi_thong_tin()`

#### c. Lớp `ThiSinhKhoiC`

- Thuộc tính: `mon_thi = ["Văn", "Sử", "Địa"]`
- Ghi đè phương thức `hien_thi_thong_tin()`

> Các lớp con có thể ghi rõ tên khối hoặc dùng `self.__class__.__name__` để hiển thị khối.

---

### 3. Lớp `TuyenSinh`

Là lớp quản lý toàn bộ danh sách thí sinh.

#### Thuộc tính:

- `danh_sach_thi_sinh`: danh sách chứa các đối tượng `ThiSinh` hoặc lớp con

#### Phương thức:

1. `them_thi_sinh(thi_sinh: ThiSinh)` – thêm mới thí sinh vào danh sách
2. `hien_thi_tat_ca()` – hiển thị toàn bộ thông tin thí sinh
3. `tim_kiem_theo_sbd(so_bao_danh: str)` – tìm và hiển thị thí sinh theo số báo danh
4. `nhap_thi_sinh()` – cho phép người dùng nhập thông tin thí sinh qua bàn phím (chọn khối, nhập thông tin)
5. `menu()` – hiển thị menu tương tác người dùng (console)

---

## Chức năng trong chương trình chính

Viết chương trình dòng lệnh với menu như sau:

1. Thêm mới thí sinh (Khối A/B/C)
2. Hiển thị toàn bộ thí sinh
3. Tìm kiếm thí sinh theo số báo danh
4. Thoát

---

## Yêu cầu áp dụng OOP

- **Abstraction (Trừu tượng)**: lớp `ThiSinh` là lớp trừu tượng
- **Inheritance (Kế thừa)**: `ThiSinhKhoiA/B/C` kế thừa `ThiSinh`
- **Polymorphism (Đa hình)**: ghi đè phương thức `hien_thi_thong_tin()` tùy theo khối
- **Encapsulation (Bao đóng)**: các thuộc tính sử dụng protected/private nếu cần

---

## Gợi ý nâng cao (tùy chọn)

- Cho phép lưu danh sách thí sinh ra file JSON/CSV
- Thêm tính năng sắp xếp danh sách theo họ tên hoặc số báo danh
- Nhập điểm từng môn và tính tổng điểm dự thi

---

## Mô hình class sơ bộ

```text
ThiSinh (abstract)
├── ThiSinhKhoiA
├── ThiSinhKhoiB
└── ThiSinhKhoiC

TuyenSinh
