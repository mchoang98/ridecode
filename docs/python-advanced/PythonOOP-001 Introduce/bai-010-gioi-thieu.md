
# Bài 010 – Giới thiệu lập trình hướng đối tượng (OOP)

## **1. Lập trình theo cách truyền thống (lập trình thủ tục)**

Lập trình thủ tục là cách viết chương trình bằng cách chia thành **các hàm**. Mỗi hàm làm một việc cụ thể. Khi muốn chương trình chạy, bạn gọi các hàm này theo thứ tự.

Ví dụ: nếu bạn muốn tìm số lớn nhất trong danh sách, bạn có thể viết hàm `tim_max()`. Khi cần, bạn chỉ cần gọi lại hàm này, không cần viết lại.

Cách làm này **đơn giản, dễ hiểu**, và **rất phù hợp cho các chương trình nhỏ**.

Tuy nhiên, nếu chương trình của bạn **ngày càng lớn**, ví dụ như phần mềm quản lý trường học (quản lý học sinh, giáo viên, khóa học...), thì bạn phải truyền đi rất nhiều dữ liệu giữa các hàm. Điều này làm chương trình trở nên **khó đọc, rối rắm và khó sửa**.

---

## **2. Lập trình hướng đối tượng (OOP)**

Lập trình hướng đối tượng là cách viết chương trình bằng cách **mô phỏng thế giới thật** bằng các **đối tượng**.

Mỗi **đối tượng** (object) là một thực thể cụ thể, ví dụ như một học sinh, một giáo viên, hay một môn học.

Trong OOP, bạn tạo ra **lớp (class)** để định nghĩa các đối tượng. Lớp chứa:

* **Dữ liệu** của đối tượng (gọi là thuộc tính)
* **Hành động** mà đối tượng có thể làm (gọi là phương thức)

### Ví dụ:

Bạn có thể tạo một lớp `SinhVien`, lớp này có thể chứa:

* Họ tên
* Địa chỉ
* Số điện thoại
* Khóa học đang học
* Giảng viên đang dạy

Và bạn cũng có thể thêm các **hành động** như:

* `dang_ky_mon()`: đăng ký môn học
* `xem_diem()`: xem điểm học tập

Khi bạn cần tạo một sinh viên mới, bạn chỉ cần tạo một **đối tượng từ lớp đó**, giống như sao chép khuôn mẫu ra.

---

## **3. So sánh nhanh giữa hai cách lập trình**

| So sánh                   | Lập trình thủ tục           | Lập trình hướng đối tượng (OOP)          |
| ------------------------- | --------------------------- | ---------------------------------------- |
| Cách tổ chức chương trình | Dựa vào các hàm             | Dựa vào các lớp và đối tượng             |
| Dữ liệu                   | Dữ liệu truyền giữa các hàm | Dữ liệu nằm trong đối tượng              |
| Quản lý chương trình      | Dễ rối nếu chương trình lớn | Dễ quản lý hơn khi chương trình phức tạp |
| Tái sử dụng               | Gọi lại hàm                 | Dùng lại lớp, kế thừa từ lớp cũ          |

---

## **4. Kết luận**

* Lập trình thủ tục phù hợp với các chương trình **nhỏ, đơn giản**.
* Lập trình hướng đối tượng giúp **dễ quản lý và phát triển các phần mềm lớn hơn**.

Trong Python, bạn có thể dễ dàng áp dụng OOP bằng cách dùng `class` để tạo lớp và `object` để tạo đối tượng từ lớp đó.
