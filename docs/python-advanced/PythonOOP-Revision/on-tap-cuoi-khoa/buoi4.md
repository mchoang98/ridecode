# ĐỀ SỐ 4

**Quản lý khách sạn**

---

## 1. Bối cảnh

Một khách sạn có nhiều loại phòng: phòng thường, phòng VIP, phòng hội nghị… Khách sạn cần phần mềm đơn giản để quản lý thông tin phòng, khách thuê, và tình trạng đặt phòng.
Bạn hãy viết chương trình quản lý khách sạn bằng **lập trình hướng đối tượng (OOP) trong Python**.

---

## 2. Mục tiêu

* Áp dụng kiến thức OOP: **class, kế thừa, đa hình, danh sách đối tượng**.
* Luyện kỹ năng quản lý dữ liệu bằng list/dict, kết hợp menu console.
* Hiểu cách tổ chức hệ thống quản lý đơn giản trong thực tế.

---

## 3. Yêu cầu chức năng

1. **Xây dựng các lớp**

   * Lớp `Phong` (cha):

     * Thuộc tính: `ma_phong`, `loai_phong`, `gia`, `tinh_trang` (trống/đang thuê).
     * Phương thức: `hien_thi()`, `cap_nhat_trang_thai()`.
   * Các lớp con:

     * `PhongThuong` (giá cơ bản).
     * `PhongVIP` (thêm dịch vụ miễn phí).
     * `PhongHoiNghi` (thêm sức chứa).

2. **Lớp KhachHang**

   * Thuộc tính: `ma_kh`, `ten`, `so_dt`.
   * Phương thức: `hien_thi()`.

3. **Chức năng quản lý**

   * Thêm phòng mới.
   * Hiển thị danh sách phòng.
   * Đặt phòng (chọn khách hàng, phòng trống).
   * Trả phòng (cập nhật trạng thái).
   * Tìm kiếm phòng theo mã số hoặc loại phòng.
   * Hiển thị danh sách khách hàng đang thuê.

4. **Menu console**

   * Cho phép người dùng chọn các chức năng trên.

---

## 4. UML Class Diagram (ASCII)

```text
                  +--------------------+
                  |       Phong        |
                  +--------------------+
                  | - ma_phong         |
                  | - loai_phong       |
                  | - gia              |
                  | - tinh_trang       |
                  +--------------------+
                  | + hien_thi()       |
                  | + cap_nhat_trang() |
                  +---------+----------+
                            |
   ------------------------------------------------
   |                        |                      |
+-----------+        +-------------+       +---------------+
|PhongThuong|        |   PhongVIP  |       |PhongHoiNghi   |
+-----------+        +-------------+       +---------------+
|            |       | - dich_vu   |       | - suc_chua     |
|            |       |             |       |                |
+-----------+        +-------------+       +---------------+
| +hien_thi()|       | +hien_thi() |       | +hien_thi()   |
+-----------+        +-------------+       +---------------+


+-------------------+
|    KhachHang      |
+-------------------+
| - ma_kh           |
| - ten             |
| - so_dt           |
+-------------------+
| + hien_thi()      |
+-------------------+
```

---

## 5. Ví dụ màn hình console

```text
=========================================
 HỆ THỐNG QUẢN LÝ KHÁCH SẠN
=========================================
1. Thêm phòng
2. Hiển thị danh sách phòng
3. Đặt phòng
4. Trả phòng
5. Tìm kiếm phòng
6. Hiển thị khách hàng đang thuê
0. Thoát
-----------------------------------------
Chọn chức năng: 1

>>> Nhập loại phòng (1=Thường, 2=VIP, 3=Hội nghị): 2
>>> Nhập mã phòng: P102
>>> Nhập giá: 1500000
>>> Nhập dịch vụ kèm theo: Buffet sáng, hồ bơi
>>> Thêm phòng thành công!

-----------------------------------------
Chọn chức năng: 2

DANH SÁCH PHÒNG
-----------------------------------------------------
Mã phòng | Loại      | Giá      | Tình trạng | Thông tin thêm
-----------------------------------------------------
P101     | Thường    | 500000   | Trống      | -
P102     | VIP       | 1500000  | Trống      | Dịch vụ: Buffet sáng, hồ bơi
-----------------------------------------------------

-----------------------------------------
Chọn chức năng: 3
>>> Nhập mã khách hàng: KH001
>>> Nhập tên khách: Nguyễn Văn A
>>> Nhập số điện thoại: 0912345678
>>> Nhập mã phòng cần thuê: P102
>>> Đặt phòng thành công!
```

