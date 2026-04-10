# Buổi 2 Lập trình quản lý Khí tài bộ đội VN

## Bối cảnh

Trong kho quân khí của bộ đội Việt Nam, có nhiều loại khí tài khác nhau như **súng, xe tăng, máy bay**… Mỗi loại khí tài có đặc điểm riêng và cách sử dụng khác nhau.
Bạn được giao nhiệm vụ thiết kế một chương trình console mô phỏng **hệ thống quản lý khí tài quân sự**.

---

## Yêu cầu

1. **Xây dựng lớp cơ sở `Equipment`**

   * Thuộc tính chung:

     * `name` (tên khí tài)
     * `weight` (trọng lượng)
     * `range` (tầm bắn/tầm hoạt động)
     * `power` (sức công phá)
   * Phương thức:

     * `displayInfo()` – in ra thông tin chi tiết khí tài.
     * `use()` – mô tả hành động sử dụng khí tài.

2. **Xây dựng các lớp kế thừa từ `Equipment`**

   * `Gun`: thêm thuộc tính `ammo` (số đạn). Khi sử dụng, giảm đi 1 viên đạn.
   * `Tank`: thêm thuộc tính `armor` (giáp). Khi sử dụng, in ra hành động “bắn đạn pháo”.
   * `Aircraft`: thêm thuộc tính `capacity` (số bom). Khi sử dụng, giảm đi 1 quả bom.

3. **Xây dựng lớp quản lý `Arsenal`**

   * Lưu trữ danh sách các khí tài.
   * Các chức năng:

     * Thêm khí tài mới.
     * Liệt kê toàn bộ khí tài.
     * Sử dụng một khí tài trong danh sách.

4. **Chương trình chính (console)**

   * Hiển thị menu cho người dùng:

     * 1. Thêm khí tài mới
     * 2. Danh sách khí tài
     * 3. Sử dụng một khí tài
     * 4. Thoát
   * Cho phép người dùng nhập lựa chọn và thực hiện chức năng tương ứng.
   * Mỗi hành động đều in kết quả rõ ràng ra màn hình.

---

## UML gợi ý

```
                +------------------+
                |    Equipment     |
                +------------------+
                | - name: String   |
                | - weight: double |
                | - range: int     |
                | - power: int     |
                +------------------+
                | + displayInfo()  |
                | + use()          |
                +------------------+
                       /_\
                        |
        -------------------------------------
        |                 |                 |
+---------------+  +---------------+  +---------------+
|      Gun      |  |     Tank      |  |   Aircraft    |
+---------------+  +---------------+  +---------------+
| - ammo: int   |  | - armor: int  |  | - capacity:int|
| + use()       |  | + use()       |  | + use()       |
+---------------+  +---------------+  +---------------+

                +------------------+
                |     Arsenal      |
                +------------------+
                | - equipments:[]  |
                +------------------+
                | + addEquipment() |
                | + listAll()      |
                | + useOne()       |
                +------------------+
```

---

## Màn hình console mô phỏng

### Menu chính

```
===== HỆ THỐNG QUẢN LÝ KHÍ TÀI QUÂN SỰ =====
1. Thêm khí tài mới
2. Danh sách khí tài
3. Sử dụng một khí tài
4. Thoát
============================================
Chọn chức năng: 
```

### Thêm khí tài mới

```
Chọn loại khí tài:
1. Súng
2. Xe tăng
3. Máy bay
Nhập lựa chọn: 1
Nhập tên súng: AK47
Nhập cân nặng (kg): 4.3
Nhập tầm bắn (m): 350
Nhập sức công phá: 70
Nhập số lượng đạn: 30
=> Thêm súng AK47 thành công!
```

### Danh sách khí tài

```
===== DANH SÁCH KHÍ TÀI =====
1. Súng AK47 | Nặng: 4.3kg | Tầm bắn: 350m | Sức công phá: 70 | Đạn: 30
2. Xe tăng T-54 | Nặng: 36000kg | Tầm bắn: 2000m | Sức công phá: 500 | Giáp: 120
3. Máy bay MiG-21 | Nặng: 8000kg | Tầm bay: 1200km | Sức công phá: 800 | Bom: 4
=============================
```

### Sử dụng khí tài

```
Nhập số thứ tự khí tài cần sử dụng: 1
Sử dụng súng AK47...
Pằng! Còn lại 29 viên đạn.
```

```
Nhập số thứ tự khí tài cần sử dụng: 2
Sử dụng xe tăng T-54...
Bùm! Đạn pháo khai hỏa.
```

```
Nhập số thứ tự khí tài cần sử dụng: 3
Sử dụng máy bay MiG-21...
Thả bom! Còn lại 3 quả bom.
```

### Thoát

```
Cảm ơn đã sử dụng hệ thống quản lý khí tài quân sự!
```

---
