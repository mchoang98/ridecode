# Bài tập interaction

### **BÀI TẬP: Mô Phỏng Quản Lý Cửa Hàng Bán Hàng**

#### **Mô tả yêu cầu**

Thiết kế một hệ thống đơn giản để mô phỏng hoạt động của một cửa hàng bán hàng gồm các class sau:

#### **1. Class `Product`**

* Thuộc tính:

  * `name` (str)
  * `price` (float)
* Phương thức:

  * `get_info()` → trả về thông tin sản phẩm dạng chuỗi.

#### **2. Class `Customer`**

* Thuộc tính:

  * `name` (str)
  * `cart` (list chứa các Product)
* Phương thức:

  * `add_to_cart(product)` → thêm sản phẩm vào giỏ.
  * `checkout()` → tính tổng tiền và in hóa đơn.

#### **3. Class `Store`**

* Thuộc tính:

  * `inventory` (list chứa các Product có sẵn)
* Phương thức:

  * `list_products()` → in danh sách sản phẩm hiện có.
  * `find_product(name)` → trả về sản phẩm theo tên nếu có.

#### **Yêu cầu chính:**

* Tạo sẵn 3 sản phẩm và thêm vào cửa hàng.
* Tạo 1 khách hàng và cho họ mua 2 sản phẩm.
* Khi `checkout()`, in ra thông tin chi tiết giỏ hàng và tổng tiền.

---

### **Gợi ý hướng dẫn:**

* Các đối tượng tương tác như sau:

  * `Customer` gọi method từ `Store` để lấy sản phẩm (`find_product`)
  * `Customer` chứa list các `Product`
  * `Product` là đối tượng độc lập được dùng bởi cả `Store` và `Customer`

---

Kết quả cần đạt:

```plaintext
=== CỬA HÀNG XYZ ===
1. Táo - 10.0$
2. Sữa - 15.5$
3. Bánh mì - 5.0$

Khách hàng: Nguyễn Văn A
Đang thêm sản phẩm vào giỏ...
> Đã thêm: Táo
> Đã thêm: Sữa
> Không tìm thấy: Coca

--- HÓA ĐƠN ---
Tên: Nguyễn Văn A
Giỏ hàng:
- Táo: 10.0$
- Sữa: 15.5$
Tổng tiền: 25.5$

Cảm ơn quý khách!
```


---
# BÀI TẬP 2: Quản lý nhân viên và phân ca làm việc

## Mục tiêu
- Rèn luyện kỹ năng thiết kế hệ thống hướng đối tượng có quan hệ một-nhiều.
- Áp dụng composition để thể hiện quan hệ giữa các class.
- Biết cách ủy quyền hành vi giữa các class (method delegation).
- Hiểu và áp dụng kế thừa để tạo ra subclass có quyền nâng cao.

---

## Yêu cầu lập trình

### 1. Thiết kế các class sau:

#### Class `Shift`
- Thuộc tính:
  - `day` (kiểu chuỗi): Thứ hoặc ngày làm việc. Ví dụ: `"Thứ 2"`, `"Thứ 3"`.
  - `time` (kiểu chuỗi): Ca làm. Ví dụ: `"Sáng"`, `"Chiều"`, `"Tối"`.
- Phương thức:
  - `__init__(self, day, time)`: Khởi tạo đối tượng `Shift`.

#### Class `Employee`
- Thuộc tính:
  - `name` (kiểu chuỗi): Tên nhân viên.
  - `role` (kiểu chuỗi): Vị trí công việc. Ví dụ: `"Thu ngân"`, `"Kho"`, `"Bảo vệ"`.
  - `shifts` (danh sách các đối tượng `Shift`): Danh sách ca làm đã được gán.
- Phương thức:
  - `__init__(self, name, role)`: Khởi tạo đối tượng nhân viên.
  - `assign_shift(self, shift)`: Gán một ca làm cho nhân viên.

#### Class `Store`
- Thuộc tính:
  - `name` (kiểu chuỗi): Tên cửa hàng.
  - `employees` (danh sách các đối tượng `Employee`): Danh sách nhân viên.
- Phương thức:
  - `__init__(self, name)`: Khởi tạo cửa hàng.
  - `add_employee(self, employee)`: Thêm một nhân viên vào cửa hàng.
  - `assign_employee(self, employee, shift)`: Gán ca làm cho nhân viên.

---

### 2. (Tuỳ chọn nâng cao) Class `Manager`
- Kế thừa từ `Employee`.
- Thêm phương thức:
  - `assign_shift_to(self, employee, shift)`: Gán ca làm cho nhân viên khác.

---

## Yêu cầu sử dụng

Sau khi hoàn thành các class, thực hiện các bước sau:

1. Tạo một cửa hàng tên `"Cửa hàng ABC"`.
2. Tạo 3 nhân viên:
   - Huy, vị trí `"Thu ngân"`
   - Lan, vị trí `"Kho"`
   - Minh, vị trí `"Bảo vệ"`
3. Thêm 3 nhân viên này vào cửa hàng.
4. Tạo các ca làm:
   - `shift1`: `"Thứ 2"` - `"Sáng"`
   - `shift2`: `"Thứ 3"` - `"Chiều"`
   - `shift3`: `"Thứ 2"` - `"Tối"`
5. Gán ca làm:
   - Gán Huy vào `shift1`
   - Gán Lan vào `shift2`
   - Gán Minh vào `shift3`

---

## Yêu cầu in ra kết quả

In ra thông tin theo đúng định dạng sau:

```
=== CỬA HÀNG ABC ===

Danh sách nhân viên:
- Huy (Thu ngân)
- Lan (Kho)
- Minh (Bảo vệ)

Phân ca:
> Gán Huy vào Thứ 2 - Sáng
> Gán Lan vào Thứ 3 - Chiều
> Gán Minh vào Thứ 2 - Tối

--- LỊCH LÀM VIỆC ---
Huy: Thứ 2 - Sáng
Lan: Thứ 3 - Chiều
Minh: Thứ 2 - Tối
```

Gợi ý:
- Có thể viết thêm phương thức `get_schedule()` hoặc `__str__()` trong class `Employee` để dễ in lịch làm việc.
- Nên nhóm phần in này thành một hàm riêng như `print_schedule(store)` để rõ ràng và dễ kiểm thử.

