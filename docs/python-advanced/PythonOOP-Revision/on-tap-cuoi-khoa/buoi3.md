# ĐỀ SỐ 3

**Quản lý phương tiện giao thông**

---

## 1. Bối cảnh

Trong xã hội hiện đại, nhu cầu đi lại và vận chuyển hàng hóa ngày càng cao. Các phương tiện giao thông đa dạng như **xe máy, ô tô, xe buýt, tàu hỏa, máy bay** cần được quản lý thông tin để phục vụ công tác vận hành và thống kê.
Bạn hãy xây dựng một **chương trình quản lý phương tiện giao thông** sử dụng **lập trình hướng đối tượng (OOP) trong Python**.

---

## 2. Mục tiêu

* Vận dụng các khái niệm OOP: **class, object, constructor, kế thừa, đóng gói, đa hình**.
* Sử dụng list để quản lý nhiều đối tượng.
* Viết menu console cho phép tương tác thêm/xem/sửa/xóa phương tiện.

---

## 3. Yêu cầu chức năng

1. **Xây dựng các lớp**

   * Lớp cha `PhuongTien` gồm các thuộc tính:

     * `ma_so`, `ten`, `nam_sx`, `hang_sx`.
   * Các lớp con kế thừa:

     * `XeMay` (thêm thuộc tính: dung tích xi-lanh).
     * `OTo` (thêm thuộc tính: số chỗ ngồi).
     * `XeBuyt` (thêm thuộc tính: tuyến số).

2. **Các phương thức**

   * `hien_thi()` → in ra thông tin của phương tiện.
   * `cap_nhat()` → cho phép sửa đổi một số thuộc tính.

3. **Quản lý danh sách phương tiện**

   * Thêm mới phương tiện (chọn loại cụ thể).
   * Hiển thị danh sách tất cả phương tiện.
   * Tìm kiếm theo mã số hoặc tên.
   * Cập nhật thông tin.
   * Xóa phương tiện.

4. **Menu console**

   * Cho phép người dùng lựa chọn các chức năng trên.

---

## 4. UML Class Diagram (ASCII)

```text
               +-------------------+
               |   PhuongTien      |
               +-------------------+
               | - ma_so           |
               | - ten             |
               | - nam_sx          |
               | - hang_sx         |
               +-------------------+
               | + hien_thi()      |
               | + cap_nhat()      |
               +---------+---------+
                         |
     ----------------------------------------------
     |                        |                   |
+-----------+          +-------------+      +-------------+
|   XeMay   |          |    OTo      |      |   XeBuyt    |
+-----------+          +-------------+      +-------------+
| - dung_tich|         | - so_cho    |      | - tuyen_so  |
+-----------+          +-------------+      +-------------+
| +hien_thi()|         | +hien_thi() |      | +hien_thi() |
+-----------+          +-------------+      +-------------+
```

---

## 5. Ví dụ màn hình console

```text
=========================================
 HỆ THỐNG QUẢN LÝ PHƯƠNG TIỆN GIAO THÔNG
=========================================
1. Thêm phương tiện
2. Hiển thị danh sách phương tiện
3. Tìm kiếm phương tiện
4. Cập nhật phương tiện
5. Xóa phương tiện
0. Thoát
-----------------------------------------
Chọn chức năng: 1

>>> Chọn loại phương tiện (1= Xe máy, 2= Ô tô, 3= Xe buýt): 1
>>> Nhập mã số: PT001
>>> Nhập tên: Honda Wave
>>> Nhập năm sản xuất: 2015
>>> Nhập hãng sản xuất: Honda
>>> Nhập dung tích xi-lanh: 110
>>> Thêm mới thành công!

-----------------------------------------
Chọn chức năng: 2

DANH SÁCH PHƯƠNG TIỆN
--------------------------------------------------------------
Mã số   | Tên           | Năm SX | Hãng SX | Loại   | Thông tin thêm
--------------------------------------------------------------
PT001   | Honda Wave    | 2015   | Honda   | Xe máy | Dung tích: 110cc
--------------------------------------------------------------

-----------------------------------------
Chọn chức năng: 3
>>> Nhập tên hoặc mã phương tiện cần tìm: PT001

KẾT QUẢ TÌM KIẾM:
PT001   | Honda Wave    | 2015   | Honda   | Xe máy | Dung tích: 110cc
```



