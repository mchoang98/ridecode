# Bài tập Dictionary
---

### 🟢 **Mức độ cơ bản**

**Bài 1: Tạo từ điển đơn giản**
Viết chương trình tạo một dictionary lưu thông tin cá nhân (tên, tuổi, địa chỉ), sau đó in ra từng thông tin.

**Bài 2: Truy cập và thêm phần tử**
Cho từ điển sau:

```python
student = {"name": "An", "age": 16}
```

Thêm key `"class"` với giá trị `"12A1"` và in ra dictionary.

**Bài 3: Duyệt dictionary**
Duyệt qua tất cả các key và value trong dictionary sau và in theo định dạng:

```
Key: name - Value: An
Key: age - Value: 16
```

**Bài 4: Kiểm tra key**
Viết chương trình cho phép người dùng nhập một key, kiểm tra xem key đó có tồn tại trong dictionary hay không.

**Bài 5: Xóa phần tử**
Xóa một key khỏi dictionary và in ra dictionary sau khi xóa.

---

### 🟡 **Mức độ trung bình**

**Bài 6: Đếm số lần xuất hiện**
Nhập vào một chuỗi, viết chương trình đếm số lần xuất hiện của mỗi ký tự trong chuỗi đó, lưu trong dictionary.

**Ví dụ input:** `"hello"`
**Output:** `{'h': 1, 'e': 1, 'l': 2, 'o': 1}`

**Bài 7: Tính điểm trung bình học sinh**
Cho dictionary:

```python
students = {
    "An": [8, 7, 9],
    "Bình": [6, 7.5, 8],
    "Chi": [9, 9, 10]
}
```

Viết chương trình tính điểm trung bình của từng học sinh và in ra kết quả dưới dạng dictionary mới.

**Bài 8: Gộp hai dictionary**
Cho hai dictionary:

```python
a = {"a": 1, "b": 2}
b = {"b": 3, "c": 4}
```

Gộp hai dictionary lại. Nếu key trùng, giá trị sẽ là tổng của hai giá trị.

**Output:** `{"a": 1, "b": 5, "c": 4}`

---

### 🔴 **Mức độ nâng cao**

**Bài 9: Lật dictionary**
Viết hàm đảo key và value trong một dictionary (giả sử các value là duy nhất và có thể hash được).

**Input:** `{"a": 1, "b": 2}`
**Output:** `{1: "a", 2: "b"}`

**Bài 10: Thống kê số lượng chữ cái hoa, thường, chữ số**
Nhập vào một chuỗi. Dùng dictionary để thống kê số lượng:

* Chữ cái viết hoa
* Chữ cái viết thường
* Chữ số

**Output:**

```python
{
    "upper": 3,
    "lower": 5,
    "digit": 2
}
```

**Bài 11: Danh bạ điện thoại**
Viết chương trình quản lý danh bạ điện thoại với các chức năng:

* Thêm liên hệ
* Xóa liên hệ
* Tìm kiếm theo tên
* Hiển thị toàn bộ danh bạ

Lưu trữ danh bạ bằng dictionary, key là tên, value là số điện thoại.

**Bài 12: Tìm key có value lớn nhất**
Viết hàm nhận dictionary đầu vào và trả về key có giá trị lớn nhất.

**Input:** `{"An": 8, "Bình": 9, "Chi": 10}`
**Output:** `"Chi"`


