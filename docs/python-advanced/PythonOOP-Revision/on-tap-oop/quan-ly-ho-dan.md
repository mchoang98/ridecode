# BÀI TẬP 4 – QUẢN LÝ HỘ DÂN TRONG KHU PHỐ

## Mục tiêu

Thiết kế chương trình quản lý hộ dân trong một khu phố, sử dụng lập trình hướng đối tượng (OOP) để thể hiện mối quan hệ giữa người – hộ – khu phố. Vận dụng đầy đủ 4 tính chất của OOP: bao đóng, kế thừa, đa hình và trừu tượng.

---

## Mô tả bài toán

Một khu phố gồm nhiều **hộ dân**.  
Mỗi **hộ dân** có thông tin:

- Số nhà
- Số thành viên trong hộ
- Danh sách các **cá nhân** sống trong hộ

Mỗi **cá nhân** có các thông tin:

- Họ tên
- Tuổi
- Nghề nghiệp
- Số CMND (là duy nhất)

---

## Yêu cầu thiết kế chương trình

### 1. Lớp `Nguoi`

Dùng để biểu diễn thông tin của từng cá nhân.

#### Thuộc tính:

- `ho_ten` (str)
- `tuoi` (int)
- `nghe_nghiep` (str)
- `so_cmnd` (str) – định danh duy nhất cho mỗi người

#### Phương thức:

- `__init__()` – khởi tạo thông tin người
- `__str__()` – trả về chuỗi mô tả thông tin người
- Các getter và setter nếu cần

---

### 2. Lớp `HoGiaDinh`

Đại diện cho một hộ dân.

#### Thuộc tính:

- `so_nha` (str hoặc int)
- `danh_sach_thanh_vien`: danh sách đối tượng `Nguoi`

#### Phương thức:

- `__init__()` – khởi tạo hộ dân
- `them_thanh_vien(nguoi: Nguoi)` – thêm người vào hộ
- `hien_thi_thong_tin()` – in thông tin hộ và các thành viên
- `tim_nguoi_theo_cmnd(cmnd: str)` – tìm người trong hộ theo số CMND

---

### 3. Lớp `KhuPho`

Quản lý tất cả các hộ trong khu phố.

#### Thuộc tính:

- `danh_sach_ho_dan`: danh sách các đối tượng `HoGiaDinh`

#### Phương thức:

- `nhap_ho_dan()` – nhập n hộ dân từ bàn phím
- `them_ho_dan(ho: HoGiaDinh)`
- `hien_thi_tat_ca()` – in thông tin tất cả hộ và thành viên
- `tim_nguoi_toan_khu(cmnd: str)` – tìm người theo CMND trong toàn khu phố

---

## Chức năng chương trình

Viết chương trình có menu tương tác như sau:

1. Nhập n hộ dân vào khu phố
2. Hiển thị thông tin các hộ dân
3. Tìm người theo số CMND
4. Thoát

---

## Yêu cầu áp dụng OOP

- **Encapsulation**: bảo vệ dữ liệu từng đối tượng `Nguoi`, `HoGiaDinh`, `KhuPho`
- **Abstraction**: ẩn chi tiết quản lý bên trong từng lớp
- **Inheritance**: nếu mở rộng thêm lớp `Nguoi` thành `TreEm`, `NguoiGia`, v.v.
- **Polymorphism**: đa hình khi in thông tin người hay hộ (ghi đè `__str__()`)

---

## Gợi ý nâng cao (tuỳ chọn)

- Thêm chức năng **tìm tất cả người trên 60 tuổi**
- Tính **tổng số người** toàn khu phố
- Tìm hộ có **số thành viên nhiều nhất**
- Lưu và đọc dữ liệu từ file `.json`

---

## Ví dụ sơ đồ lớp (class diagram)

```text
Nguoi
├── ho_ten
├── tuoi
├── nghe_nghiep
└── so_cmnd

HoGiaDinh
├── so_nha
└── danh_sach_thanh_vien: List[Nguoi]

KhuPho
└── danh_sach_ho_dan: List[HoGiaDinh]
