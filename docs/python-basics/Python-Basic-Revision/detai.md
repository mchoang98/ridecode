# Danh sách đề tài cuối khóa tự chọn 



## 1. Quản Lý Danh Sách Mua Sắm

**Yêu cầu:**

* Khi chạy chương trình, in menu:

  ```
  === QUẢN LÝ DANH SÁCH MUA SẮM ===
  1. Thêm mặt hàng
  2. Xóa mặt hàng
  3. Hiển thị danh sách mua sắm
  0. Thoát
  Chọn chức năng: 
  ```
* Người dùng nhập số để chọn chức năng.
* Nếu chọn **1**: yêu cầu nhập tên mặt hàng, thêm vào danh sách.
* Nếu chọn **2**: nhập tên mặt hàng muốn xóa, nếu tồn tại thì xóa, nếu không thì báo “Không tìm thấy mặt hàng”.
* Nếu chọn **3**: hiển thị toàn bộ danh sách theo dạng:

  ```
  Danh sách mua sắm:
  1. Gạo
  2. Sữa
  3. Táo
  ```

---

## 2. Tính Điểm Trung Bình (nhiều môn)

**Yêu cầu:**

* Menu chương trình:

  ```
  === TÍNH ĐIỂM TRUNG BÌNH ===
  1. Nhập điểm cho môn học
  2. Xem điểm trung bình từng môn
  3. Xem điểm trung bình chung
  4. Xem danh sách điểm
  0. Thoát
  ```
* **1. Nhập điểm**: nhập tên môn + các điểm cách nhau bởi dấu cách. (VD: Toán → `8 9 7.5 6`)
* **2. Trung bình từng môn**: in `Toán: 7.63, Văn: 8.0, Anh: 6.75`.
* **3. Trung bình chung**: gộp tất cả điểm các môn → in kết quả.
* **4. Danh sách điểm**: in toàn bộ môn và điểm đã nhập.


---

## 3. Quản Lý Danh Bạ

**Yêu cầu:**

* In menu:

  ```
  === QUẢN LÝ DANH BẠ ===
  1. Thêm liên lạc
  2. Tìm kiếm liên lạc
  3. Xóa liên lạc
  4. Hiển thị toàn bộ danh bạ
  0. Thoát
  ```
* Mỗi liên lạc gồm: **Tên** + **Số điện thoại**.
* Thêm → nhập tên + số điện thoại, lưu vào danh sách.
* Tìm kiếm → nhập tên, in ra số điện thoại nếu có.
* Xóa → nhập tên, xóa nếu tồn tại.
* Hiển thị → in dạng:

  ```
  Danh bạ:
  1. An - 0123456789
  2. Bình - 0987654321
  ```

---

## 4. Lập Kế Hoạch Chuyến Đi

**Yêu cầu:**

* In menu:

  ```
  === LẬP KẾ HOẠCH CHUYẾN ĐI ===
  1. Thêm địa điểm
  2. Xóa địa điểm
  3. Hiển thị danh sách địa điểm
  0. Thoát
  ```
* Thêm → nhập tên địa điểm (VD: "Hạ Long").
* Hiển thị → in danh sách.

---

## 5. Quản Lý Thư Viện

**Yêu cầu:**

* Menu:

  ```
  === QUẢN LÝ THƯ VIỆN ===
  1. Thêm sách
  2. Xóa sách
  3. Kiểm tra sách có tồn tại hay không
  4. Hiển thị toàn bộ sách
  0. Thoát
  ```
* Mỗi sách chỉ lưu **Tên sách**.
* Kiểm tra sách → nhập tên, trả lời “Có” hoặc “Không”.

---

## 6. Quản Lý Chi Tiêu

**Yêu cầu:**

* Menu:

  ```
  === QUẢN LÝ CHI TIÊU ===
  1. Thêm khoản chi tiêu
  2. Hiển thị toàn bộ chi tiêu
  3. Tính tổng chi tiêu
  0. Thoát
  ```
* Mỗi khoản chi tiêu gồm: **Tên khoản** + **Số tiền**.
* Tổng chi tiêu = cộng tất cả số tiền.

---

## 7. Tạo Danh Sách Công Việc

**Yêu cầu:**

* Menu:

  ```
  === DANH SÁCH CÔNG VIỆC ===
  1. Thêm công việc
  2. Đánh dấu hoàn thành công việc
  3. Hiển thị danh sách công việc
  0. Thoát
  ```
* Danh sách hiển thị dạng:

  ```
  1. Làm bài tập [Chưa hoàn thành]
  2. Rửa bát [Hoàn thành]
  ```

---

## 8. Quản Lý Nhân Viên

**Yêu cầu:**

* Menu:

  ```
  === QUẢN LÝ NHÂN VIÊN ===
  1. Thêm nhân viên
  2. Hiển thị danh sách nhân viên
  0. Thoát
  ```
* Nhân viên gồm: **Tên**, **Tuổi**, **Vị trí**.
* Hiển thị dạng:

  ```
  1. An - 25 tuổi - Lập trình viên
  2. Bình - 30 tuổi - Kế toán
  ```

---

## 9. Quản Lý Bữa Ăn

**Yêu cầu:**

* Menu:

  ```
  === QUẢN LÝ BỮA ĂN TRONG TUẦN ===
  1. Thêm bữa ăn
  2. Xóa bữa ăn
  3. Hiển thị thực đơn trong tuần
  0. Thoát
  ```
* Lưu dưới dạng: **Ngày** + **Món ăn**.
  Ví dụ:

  ```
  Thứ 2: Cơm gà
  Thứ 3: Bún bò
  ```

---

## 10. Theo Dõi Sức Khỏe

**Yêu cầu:**

* Menu:

  ```
  === THEO DÕI SỨC KHỎE ===
  1. Nhập cân nặng tháng mới
  2. Hiển thị cân nặng theo tháng
  3. Tính trung bình cân nặng
  0. Thoát
  ```
* Lưu dạng: **Tháng** + **Cân nặng**.
* Trung bình = tổng cân nặng / số tháng.
