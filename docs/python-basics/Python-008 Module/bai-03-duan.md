# Quản lý module

## 1. **Quản lý học sinh (dùng list + module tự viết)**

* Viết module `student.py` chứa các hàm:

  * `add_student(danh_sach, ten, tuoi, diem)` → thêm học sinh.
  * `show_students(danh_sach)` → in ra danh sách.
  * `average_score(danh_sach)` → tính điểm trung bình.
* File chính `main.py`:

  * Nhập dữ liệu vài học sinh.
  * Gọi hàm trong module để in danh sách + tính điểm TB.

---

## 2. **Quản lý thư viện (dùng dictionary + module)**

* Viết module `library.py` với các hàm:

  * `add_book(thuvien, ten, tacgia)` → thêm sách.
  * `search_book(thuvien, keyword)` → tìm sách theo tên.
* File chính:

  * Tạo danh sách sách (dùng dict).
  * Cho nhập tên sách để tìm.

---

## 3. **Game đoán số (dùng `random` built-in)**

* Import `random`.
* Máy sinh số từ 1–50.
* Người chơi nhập số, báo **“cao hơn / thấp hơn / đúng”**.
* Giới hạn 5 lần đoán.

---

## 4. **Công cụ chuyển đổi đơn vị (dùng `math`)**

* Viết module `converter.py` với các hàm:

  * `cm_to_m(x)`
  * `m_to_km(x)`
  * `c_to_f(c)`
* File chính:

  * Nhập giá trị, gọi hàm để chuyển đổi.

---

## 5. **Phân tích dữ liệu đơn giản (dùng `statistics`)**

* Nhập một list số (vd: điểm kiểm tra).
* Dùng module `statistics`:

  * `mean()`, `median()`, `stdev()`.
* In kết quả: trung bình, trung vị, độ lệch chuẩn.

---

## 6. **Kiểm tra mật khẩu an toàn (dùng `string` + module tự viết)**

* Viết module `password.py`:

  * Hàm `check_password(pw)` kiểm tra:

    * ≥ 8 ký tự.
    * Có chữ hoa, chữ thường, số, ký tự đặc biệt.
* File chính:

  * Nhập mật khẩu từ bàn phím.
  * In ra “Yếu / Trung bình / Mạnh”.

---

