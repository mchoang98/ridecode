# BÀI TẬP 1 – QUẢN LÝ CÁN BỘ

## Mục tiêu

Vận dụng các tính chất của lập trình hướng đối tượng trong Python (Encapsulation, Inheritance, Polymorphism) để xây dựng hệ thống quản lý cán bộ bao gồm Công nhân, Kỹ sư và Nhân viên.

## Yêu cầu kỹ thuật

### 1. Xây dựng các lớp

#### Lớp `CanBo` (Lớp cha)

- Thuộc tính:
  - `ho_ten` (str)
  - `tuoi` (int)
  - `gioi_tinh` (str): Nam, Nữ, Khác
  - `dia_chi` (str)

- Phương thức:
  - `hien_thi_thong_tin()` – Hiển thị thông tin cơ bản của cán bộ (phương thức có thể được ghi đè ở lớp con)

#### Lớp `CongNhan` (kế thừa `CanBo`)

- Thuộc tính thêm:
  - `bac` (int): giá trị từ 1 đến 10

#### Lớp `KySu` (kế thừa `CanBo`)

- Thuộc tính thêm:
  - `nganh_dao_tao` (str)

#### Lớp `NhanVien` (kế thừa `CanBo`)

- Thuộc tính thêm:
  - `cong_viec` (str)

### 2. Xây dựng lớp `QLCB` (Quản lý cán bộ)

Chứa danh sách cán bộ và các phương thức quản lý cán bộ.

- Thuộc tính:
  - `danh_sach_can_bo`: danh sách chứa đối tượng từ lớp `CanBo` hoặc lớp con

- Phương thức:
  1. `them_can_bo(cb: CanBo)` – Thêm cán bộ mới
  2. `tim_kiem_theo_ho_ten(ten: str)` – Trả về danh sách cán bộ có họ tên trùng khớp
  3. `hien_thi_danh_sach()` – Hiển thị toàn bộ danh sách cán bộ
  4. `xoa_can_bo_theo_ten(ten: str)` – (Tùy chọn nâng cao)
  5. `luu_file()` / `doc_file()` – (Tùy chọn nâng cao)

## Chương trình chính

Xây dựng chương trình console có menu với các chức năng:

1. Thêm mới cán bộ (hỏi loại cán bộ: Công nhân, Kỹ sư, Nhân viên, sau đó nhập thông tin tương ứng)
2. Tìm kiếm cán bộ theo họ tên
3. Hiển thị toàn bộ danh sách cán bộ
4. Thoát chương trình

## Yêu cầu về OOP

- Kế thừa: `CongNhan`, `KySu`, `NhanVien` kế thừa từ `CanBo`
- Bao đóng: Thuộc tính đặt ở chế độ private/protected, sử dụng getter/setter nếu cần
- Đa hình: Ghi đè phương thức `hien_thi_thong_tin()` ở từng lớp con
- Trừu tượng (tùy chọn nâng cao): Có thể sử dụng module `abc` để bắt buộc các lớp con phải định nghĩa `hien_thi_thong_tin()`

## Gợi ý nâng cao (tuỳ chọn)

- Lưu và đọc danh sách cán bộ từ file (sử dụng JSON hoặc Pickle)
- Kiểm tra nhập trùng tên hoặc tên rỗng
- Giao diện đồ hoạ (Tkinter hoặc PyQt)
- Sử dụng `isinstance` để phân loại khi hiển thị

