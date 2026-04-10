# Ôn tập 1:

## Bài tập 1: Thiết kế hệ thống quản lý trường học bằng OOP

### Mục tiêu

Thiết kế và lập trình một hệ thống quản lý **giáo viên**, **học sinh**, và **môn học** sử dụng Python và đầy đủ 4 tính chất OOP: **đóng gói**, **kế thừa**, **đa hình**, **trừu tượng**.

---

### Yêu cầu tình huống

1. **Người trong trường**

   * Gồm giáo viên và học sinh, có mã định danh, tên, tuổi.
   * Có thể in toàn bộ danh sách người với vai trò tương ứng.
   * Phải kế thừa từ một lớp cha chung.

2. **Học sinh**

   * Có khối lớp (6, 7, 8, ...).
   * Học nhiều môn.
   * Điểm trung bình tính từ các môn, dùng để xếp loại học lực (Giỏi, Khá, Trung bình, Yếu).

3. **Giáo viên**

   * Dạy một hoặc nhiều môn.
   * Có thể phụ trách một hoặc nhiều lớp.
   * Xem được thông tin chi tiết.

4. **Môn học**

   * Có mã môn, tên môn, loại (Lý thuyết hoặc Thực hành).
   * Mỗi loại có cách đánh giá khác nhau.

5. **Lịch thi**

   * Do giáo viên tạo.
   * Học sinh có thể tra cứu.
   * Không trùng lịch thi cho cùng học sinh.

6. **Báo cáo**

   * Danh sách học sinh theo lớp và học lực.
   * Danh sách giáo viên và môn dạy.
   * Thống kê học lực.
   * Lịch thi theo lớp hoặc học sinh.

---

### Yêu cầu kỹ thuật

| Tính chất OOP | Yêu cầu áp dụng                                                       |
| ------------- | --------------------------------------------------------------------- |
| Đóng gói      | Bảo vệ thông tin như điểm số, mã định danh, lịch thi                  |
| Kế thừa       | Có ít nhất một lớp cha và hai lớp con kế thừa                         |
| Đa hình       | Dùng các phương thức cùng tên nhưng xử lý khác nhau tùy lớp           |
| Trừu tượng    | Dùng `abstract class` để ép buộc các lớp con phải cài đặt phương thức |

---

## BÀI TẬP 2: HỆ THỐNG QUẢN LÝ GARAGE Ô TÔ

### Mục tiêu

Thiết kế và lập trình một hệ thống quản lý garage ô tô sử dụng OOP. Hệ thống phải quản lý các loại phương tiện khác nhau, thông tin chủ xe, và các dịch vụ bảo dưỡng đã thực hiện.

---

## Yêu cầu thiết kế lớp

1. **Vehicle** (lớp trừu tượng)

   * Thuộc tính: `license_plate` (biển số), `brand` (hãng xe), `owner_name` (chủ xe)
   * Phương thức trừu tượng:

     * `get_vehicle_type()` → trả về loại xe: "Car", "Motorbike", …
     * `calculate_service_fee()` → tính phí bảo dưỡng tùy loại xe

2. **Car** và **Motorbike** (kế thừa từ Vehicle)

   * Car có thêm `seats` (số chỗ ngồi), phí = 500,000 + (số chỗ x 50,000)
   * Motorbike có thêm `engine_cc` (phân khối), phí = 200,000 (+ thêm nếu engine\_cc > 150)

3. **ServiceRecord**

   * Đại diện cho một lượt bảo dưỡng
   * Thuộc tính: `vehicle`, `date` (ngày), `service_type` (loại dịch vụ), `fee` (tính từ vehicle)

4. **Garage**

   * Quản lý danh sách xe và danh sách lịch sử bảo dưỡng
   * Phương thức:

     * `add_vehicle(vehicle)`
     * `add_service_record(record)`
     * `list_vehicles_by_type(vehicle_type)`
     * `generate_report()`

---

## Yêu cầu về OOP

| Tính chất  | Ứng dụng yêu cầu trong bài                                            |
| ---------- | --------------------------------------------------------------------- |
| Đóng gói   | Sử dụng `@property` để bảo vệ thông tin như biển số, phân khối        |
| Kế thừa    | `Car`, `Motorbike` kế thừa `Vehicle`                                  |
| Đa hình    | Gọi `calculate_service_fee()` trên các `Vehicle` có kết quả khác nhau |
| Trừu tượng | `Vehicle` là abstract class, bắt buộc override phương thức của nó     |

---

## Yêu cầu triển khai

* Viết toàn bộ class theo hướng dẫn, không dùng thư viện ngoài trừ `abc`
* Khởi tạo ít nhất 4–6 xe (Car và Motorbike) và 5–7 lượt bảo dưỡng
* Gọi `garage.generate_report()` để in báo cáo tổng hợp

---

## Gợi ý báo cáo kết quả

```
===== DANH SÁCH BẢO DƯỠNG =====
Ngày: 2025-07-01 | Xe: Car | Biển số: 51A-12345 | Chủ xe: Nguyễn Văn A | Dịch vụ: Thay nhớt | Phí: 650000
Ngày: 2025-07-02 | Xe: Motorbike | Biển số: 59X1-67890 | Chủ xe: Trần Thị B | Dịch vụ: Sửa phanh | Phí: 200000
...
Tổng lượt bảo dưỡng: 6
Tổng doanh thu: 3.100.000 VNĐ
```

