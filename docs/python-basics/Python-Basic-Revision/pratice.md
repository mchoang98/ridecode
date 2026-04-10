
# BÀI TẬP: TẠO CHƯƠNG TRÌNH THỜI KHÓA BIỂU MÔN HỌC (DÙNG LIST)

###  Mục tiêu:

* Luyện tập kỹ năng dùng `list`, `input`, vòng lặp `for`
* Hiểu cách lưu trữ dữ liệu dạng bảng (dòng – cột)
* Tạo ra chương trình có ý nghĩa thực tế với học sinh

---

###  Yêu cầu:

Em hãy viết một chương trình Python đơn giản giúp người dùng **tạo ra thời khóa biểu môn học** theo các bước sau:

---

###  HƯỚNG DẪN TỪNG BƯỚC

#### **Bước 1: Nhập thông tin ban đầu**

1. Hỏi người dùng:

   > “Bạn muốn tạo thời khóa biểu cho bao nhiêu ngày?”
   > (Ví dụ: nhập `5` cho Thứ 2 → Thứ 6)

2. Hỏi tiếp:

   > “Mỗi ngày học bao nhiêu tiết?”
   > (Ví dụ: nhập `4` tiết)

3. Hỏi người dùng nhập tên các môn học, ví dụ:

   > “Toán, Văn, Anh, Lý, Hóa”

---

#### **Bước 2: Nhập môn học cho từng tiết**

* Với mỗi ngày và mỗi tiết, hỏi người dùng:

  > “Nhập môn học cho Thứ 2 – Tiết 1: ”
  > “Nhập môn học cho Thứ 2 – Tiết 2: ”
  > …
  > (Lặp lại cho từng ngày và tiết)

* Lưu các dữ liệu đó vào **một danh sách 2 chiều**:

  * Mỗi hàng là 1 tiết
  * Mỗi cột là 1 ngày

---

#### **Bước 3: In ra thời khóa biểu**

In kết quả ra màn hình giống bảng sau:

```
----------------------------------------------
| Tiết | Thứ 2 | Thứ 3 | Thứ 4 | Thứ 5 | Thứ 6 |
----------------------------------------------
|  1   | Toán  | Văn   | Toán  | Lý    | Văn   |
|  2   | Anh   | Hóa   | Toán  | Anh   | Sử    |
|  3   | Văn   | Anh   | Lý    | Toán  | Hóa   |
|  4   | Lý    |       |       |       |       |
----------------------------------------------
```

---

###  Quy định:

* **Chỉ dùng `list`, `input()`, `for`, `print()`**
* Dữ liệu có thể để trống nếu không có môn (ghi `""`)

---


###  Kết quả mong muốn:

Chương trình chạy → hỏi người dùng → in ra thời khóa biểu như bảng ở trên.


