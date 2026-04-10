# BÀI TẬP 2 – QUẢN LÝ TÀI LIỆU THƯ VIỆN

## Mục tiêu

Xây dựng hệ thống quản lý tài liệu trong thư viện bao gồm: Sách, Tạp chí và Báo. Vận dụng các tính chất OOP trong Python như kế thừa, đa hình và bao đóng để tổ chức dữ liệu hiệu quả và dễ mở rộng.

## Mô tả bài toán

Một thư viện lưu trữ nhiều loại tài liệu. Mỗi tài liệu đều có thông tin chung và một số thuộc tính riêng tùy theo loại tài liệu.

### Các loại tài liệu:

- **Sách (Book)**: Có tên tác giả và số trang.
- **Tạp chí (Magazine)**: Có số phát hành và tháng phát hành.
- **Báo (Newspaper)**: Có ngày phát hành.

## Yêu cầu về thiết kế chương trình

### 1. Lớp `TaiLieu` (lớp cha trừu tượng)

#### Thuộc tính:

- `ma_tai_lieu` (str): mã tài liệu duy nhất
- `ten_nxb` (str): tên nhà xuất bản
- `so_ban_phat_hanh` (int): số bản phát hành

#### Phương thức:

- `hien_thi_thong_tin()` – (abstract method): dùng để hiển thị thông tin tài liệu

> Gợi ý: Sử dụng module `abc` (`from abc import ABC, abstractmethod`) để tạo lớp trừu tượng.

---

### 2. Các lớp con kế thừa từ `TaiLieu`:

#### Lớp `Sach`:

- Thuộc tính riêng:
  - `ten_tac_gia` (str)
  - `so_trang` (int)

- Ghi đè `hien_thi_thong_tin()`

---

#### Lớp `TapChi`:

- Thuộc tính riêng:
  - `so_phat_hanh` (int)
  - `thang_phat_hanh` (int)

- Ghi đè `hien_thi_thong_tin()`

---

#### Lớp `Bao`:

- Thuộc tính riêng:
  - `ngay_phat_hanh` (str hoặc datetime)

- Ghi đè `hien_thi_thong_tin()`

---

### 3. Lớp `QuanLySach`

Là lớp quản lý toàn bộ danh sách tài liệu trong thư viện.

#### Thuộc tính:

- `danh_sach_tai_lieu` – List chứa các đối tượng thuộc `TaiLieu` hoặc lớp con

#### Phương thức:

1. `them_tai_lieu(tailieu: TaiLieu)` – Thêm mới tài liệu vào danh sách
2. `xoa_tai_lieu(ma_tai_lieu: str)` – Xoá tài liệu theo mã tài liệu
3. `hien_thi_tai_lieu()` – Hiển thị toàn bộ danh sách tài liệu
4. `tim_kiem_theo_loai(loai: str)` – Tìm kiếm tài liệu theo loại: Sách, Tạp chí, Báo

> Gợi ý: Dùng `isinstance()` để kiểm tra loại tài liệu.

---

## Chương trình chính

Thiết kế chương trình giao diện dòng lệnh (console-based) có menu như sau:

1. Thêm tài liệu mới (sách, tạp chí, báo)
2. Hiển thị toàn bộ danh sách tài liệu
3. Xóa tài liệu theo mã
4. Tìm kiếm tài liệu theo loại
5. Thoát

---

## Yêu cầu áp dụng OOP

- **Inheritance (Kế thừa)**: `Sach`, `TapChi`, `Bao` kế thừa từ `TaiLieu`
- **Polymorphism (Đa hình)**: Ghi đè phương thức `hien_thi_thong_tin()` ở từng lớp con
- **Encapsulation (Bao đóng)**: Các thuộc tính để ở chế độ private/protected nếu cần, truy cập qua phương thức
- **Abstraction (Trừu tượng)**: Dùng `abstract class` và `abstract method` cho lớp `TaiLieu`

---

## Mở rộng (tuỳ chọn)

- Lưu thông tin tài liệu ra file JSON hoặc CSV
- Sắp xếp tài liệu theo số bản phát hành hoặc tên nhà xuất bản
- Tìm kiếm tài liệu theo nhà xuất bản

---

## Gợi ý triển khai

- Module `abc` để tạo lớp trừu tượng
- Module `typing` để khai báo danh sách tài liệu
- Module `datetime` nếu xử lý ngày tháng trong `Bao`

---

