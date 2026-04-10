# Bài tập tự luyện

## Bài 1: Quản lý điểm sinh viên và các trường hợp thực tế

**Yêu cầu:**

1. Tạo lớp `SinhVien` với các thuộc tính:

   * `ho_ten`
   * `ma_sv`
   * `lop`
   * `diem_tb` (điểm trung bình, từ 0 đến 10)

2. Viết các phương thức:

   * `in_thong_tin()`: in đầy đủ thông tin sinh viên.
   * `xep_loai()`: xếp loại theo điểm:

     * `>= 8`: Giỏi
     * `>= 6.5`: Khá
     * `>= 5`: Trung bình
     * `< 5`: Yếu
   * `cap_nhat_diem(moi)`: cập nhật điểm trung bình mới (có kiểm tra hợp lệ, điểm phải từ 0 đến 10)

3. Tạo 3 sinh viên với điểm khác nhau, in thông tin và xếp loại.

4. Mô phỏng các trường hợp:

   * Cập nhật điểm của một sinh viên (có thể điểm giảm hoặc tăng).
   * In lại thông tin và xếp loại sau khi cập nhật điểm.

---

## Bài 2: Quản lý xe Car với các tình huống thực tế

**Yêu cầu:**

1. Tạo lớp `Car` với các thuộc tính:

   * `color`
   * `brand`
   * `year`
   * `mileage` (số km đã đi, mặc định 0)
   * `engine_on` (trạng thái máy, True/False, mặc định False)
   * `car_type` (`"electric"` hoặc `"gasoline"`)
   * `battery_level` (chỉ xe điện, 0-100%, mặc định 100)
   * `fuel_level` (chỉ xe xăng, lít, mặc định 50)

2. Viết các phương thức:

   * `start_engine()`, `stop_engine()`
   * `drive(km)`:

     * Nếu xe điện: giảm pin 1% cho mỗi km, không chạy nếu pin < 10%.
     * Nếu xe xăng: giảm xăng 1 lít cho mỗi 15 km, không chạy nếu xăng < 5 lít.
     * Nếu máy tắt thì báo lỗi không thể lái.
   * `paint(new_color)` đổi màu xe.
   * `charge()` (xe điện): sạc pin về 100%.
   * `refuel(amount)` (xe xăng): đổ thêm xăng.

3. Tạo 2 xe:

   * Xe điện màu trắng hãng Tesla năm 2022.
   * Xe xăng màu đỏ hãng Toyota năm 2020.

4. Mô phỏng các trường hợp thực tế:

   * Bật máy, chạy xe, in mức pin/xăng còn lại.
   * Thử chạy xe khi máy tắt (báo lỗi).
   * Đổi màu xe.
   * Sạc pin hoặc đổ xăng khi cần.



