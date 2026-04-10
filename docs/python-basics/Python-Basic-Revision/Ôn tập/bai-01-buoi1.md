# Buổi 1: Quản lý khí tài quân đội VN 

**Quản lý khí tài quân sự của bộ đội Việt Nam**

---

## 1. Bối cảnh

Trong công tác huấn luyện và bảo đảm quốc phòng, các đơn vị bộ đội Việt Nam phải quản lý nhiều loại **khí tài quân sự** (ví dụ: súng bộ binh, pháo, xe tăng, radar, thiết bị thông tin, …).
Để thuận tiện cho việc lưu trữ và tra cứu thông tin, cần xây dựng một **chương trình Python chạy trên console** cho phép quản lý cơ bản danh mục khí tài.

---

## 2. Mục tiêu

* Vận dụng kiến thức Python cơ bản (biến, list/dictionary, vòng lặp, hàm, module).
* Biết tổ chức chương trình thành nhiều file/module:

  * `main.py` (chạy chương trình chính).
  * `database.py` (lưu trữ dữ liệu và các thao tác CRUD).
  * `menu.py` (hiển thị menu, nhận lệnh từ người dùng).
* Phát triển chương trình có menu, xử lý nhập/xuất dữ liệu từ bàn phím.

---

## 3. Yêu cầu chức năng

Chương trình phải cho phép:

1. **Thêm khí tài mới**

   * Thông tin gồm: Mã số, Tên khí tài, Loại khí tài, Năm sản xuất, Số lượng.
   * Dữ liệu lưu trong danh sách (list) hoặc từ điển (dict).

2. **Hiển thị toàn bộ danh sách khí tài**

   * In ra bảng với các cột: Mã số – Tên – Loại – Năm – Số lượng.

3. **Tìm kiếm khí tài theo mã số hoặc tên**

   * Cho phép người dùng nhập mã hoặc tên, sau đó hiển thị kết quả.

4. **Cập nhật thông tin khí tài**

   * Chọn theo mã số, rồi sửa các trường thông tin.

5. **Xóa khí tài**

   * Chọn theo mã số để xóa.

6. **Thoát chương trình**

---

## 4. UML Class Diagram (mô phỏng dữ liệu, viết ASCII)

```text
+-------------------+
|   Khí Tài (dict)  |
+-------------------+
| - mã_số           |
| - tên             |
| - loại            |
| - năm_sx          |
| - số_lượng        |
+-------------------+

+-------------------+
|   database.py     |
+-------------------+
| + add_item()      |
| + show_all()      |
| + find_item()     |
| + update_item()   |
| + delete_item()   |
+-------------------+

+-------------------+
|     menu.py       |
+-------------------+
| + print_menu()    |
| + get_choice()    |
+-------------------+

+-------------------+
|     main.py       |
+-------------------+
| + chạy chương trình|
+-------------------+
```

(Lưu ý: không dùng class thực sự, UML chỉ để minh họa module và cấu trúc dữ liệu).

---

## 5. Ví dụ màn hình console

```text
=========================================
 HỆ THỐNG QUẢN LÝ KHÍ TÀI QUÂN SỰ
=========================================
1. Thêm khí tài
2. Hiển thị danh sách khí tài
3. Tìm kiếm khí tài
4. Cập nhật khí tài
5. Xóa khí tài
0. Thoát
-----------------------------------------
Chọn chức năng: 1

>>> Nhập mã số: KT001
>>> Nhập tên khí tài: Súng AK-47
>>> Nhập loại khí tài: Bộ binh
>>> Nhập năm sản xuất: 1975
>>> Nhập số lượng: 120
>>> Thêm mới thành công!

-----------------------------------------
Chọn chức năng: 2

DANH SÁCH KHÍ TÀI
------------------------------------------------------
Mã số   | Tên            | Loại      | Năm SX | SL
------------------------------------------------------
KT001   | Súng AK-47     | Bộ binh   | 1975   | 120
------------------------------------------------------

-----------------------------------------
Chọn chức năng: 3
>>> Nhập tên hoặc mã khí tài cần tìm: AK-47

KẾT QUẢ TÌM KIẾM:
KT001   | Súng AK-47     | Bộ binh   | 1975   | 120
```

