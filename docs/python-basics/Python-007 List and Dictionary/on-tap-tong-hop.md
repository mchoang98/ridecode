# Ôn tập tổng hợp List - Tuple - Set

## MỨC 1: CƠ BẢN (5 bài)

### Bài 1. Danh sách bạn thân

**Yêu cầu**: Nhập vào tên của 5 người bạn và lưu vào danh sách.
Sau đó in ra danh sách và số lượng người bạn.

**Hướng dẫn**:

* Sử dụng `input()` để nhập tên từng người.
* Dùng `append()` để thêm vào list.
* Dùng `print()` để hiển thị danh sách và `len()` để đếm số phần tử.

---

### Bài 2. Tên thú cưng bất biến

**Yêu cầu**: Tạo một tuple gồm tên ba con thú cưng yêu thích, ví dụ: mèo, chó, thỏ.
Thử thay đổi tên thú thứ hai và quan sát kết quả.

**Hướng dẫn**:

* Tạo tuple bằng cú pháp `("mèo", "chó", "thỏ")`.
* Thử gán lại phần tử thứ hai. Python sẽ báo lỗi vì tuple không thể thay đổi.
* In ra thông báo giải thích sự khác biệt giữa list và tuple.

---

### Bài 3. Gộp nhóm bạn

**Yêu cầu**: Cho hai danh sách bạn bè của bạn và anh trai bạn. Một số tên có thể trùng.
Hãy gộp lại thành một tập hợp chỉ chứa tên không trùng nhau.

**Hướng dẫn**:

* Tạo hai list có sẵn hoặc nhập từ bàn phím.
* Chuyển mỗi list sang `set`, rồi dùng phép hợp `|` hoặc `set1.union(set2)`.

---

### Bài 4. Điểm kiểm tra bất ngờ

**Yêu cầu**: Cho danh sách điểm kiểm tra của bạn, hãy tìm ra điểm cao nhất và vị trí (chỉ số) của nó.

**Hướng dẫn**:

* Dùng `max()` để tìm điểm cao nhất.
* Dùng `.index()` để tìm vị trí của điểm đó trong list.

---

### Bài 5. Quà sinh nhật

**Yêu cầu**: Một người nhận được nhiều món quà sinh nhật (có thể trùng).
Hãy tạo danh sách quà và in ra danh sách quà không trùng nhau.

**Hướng dẫn**:

* Tạo list quà tặng với vài món trùng.
* Dùng `set()` để loại bỏ quà trùng và in ra kết quả.

---

## MỨC 2: TRUNG BÌNH (5 bài)

### Bài 6. Đảo thứ tự xếp hàng

**Yêu cầu**: Cho danh sách xếp hàng của học sinh, hãy chuyển sang dạng tuple và đảo ngược thứ tự.

**Hướng dẫn**:

* Dùng `tuple()` để chuyển list sang tuple.
* Dùng cú pháp `[::-1]` để đảo ngược tuple.

---

### Bài 7. Tìm người giỏi nhất

**Yêu cầu**: Cho danh sách điểm của một lớp học. Hãy:

1. Tìm các điểm không trùng nhau.
2. Đếm số học sinh đạt điểm cao nhất.

**Hướng dẫn**:

* Dùng `set()` để lấy điểm duy nhất.
* Dùng `max()` để tìm điểm cao nhất, `count()` để đếm số lần xuất hiện.

---

### Bài 8. Chuyển đổi đồ uống

**Yêu cầu**: Cho một tuple gồm các loại đồ uống yêu thích.
Hãy chuyển thành list và thêm món mới vào cuối.

**Hướng dẫn**:

* Dùng `list()` để chuyển đổi tuple.
* Dùng `.append()` để thêm phần tử.

---

### Bài 9. Tên bắt đầu bằng chữ A hoặc B

**Yêu cầu**: Cho danh sách tên học sinh, in ra các tên bắt đầu bằng chữ A hoặc B.

**Hướng dẫn**:

* Duyệt từng tên trong list.
* Dùng `startswith("A")` hoặc `startswith("B")` để kiểm tra.

---

### Bài 10. So sánh nhóm học sinh

**Yêu cầu**: Cho danh sách học sinh của hai nhóm.
In ra các học sinh chỉ có ở nhóm A nhưng không có ở nhóm B.

**Hướng dẫn**:

* Dùng `set()` để chuyển hai danh sách.
* Dùng phép trừ `setA - setB`.

---

## MỨC 3: NÂNG CAO (5 bài)

### Bài 11. Nhân vật hoạt hình

**Yêu cầu**: Cho danh sách các nhân vật hoạt hình dạng tuple `(tên, loại)`.
Hãy in ra các loại nhân vật không trùng nhau.

**Hướng dẫn**:

* Tạo list gồm các tuple như `("Doremon", "mèo")`.
* Duyệt qua từng tuple, thêm `loại` vào `set()`.

---

### Bài 12. Lịch học

**Yêu cầu**: Cho một tuple chứa tên các môn học trong tuần.
Đếm số lần học mỗi môn và in ra các môn chỉ học một lần.

**Hướng dẫn**:

* Duyệt tuple và dùng `dict` để đếm số lần xuất hiện.
* In các môn có giá trị là 1.

---

### Bài 13. Tính điểm trung bình

**Yêu cầu**: Cho danh sách học sinh với điểm như sau:
`[("An", [8, 9, 10]), ("Bình", [6, 5, 7])]`
Tính điểm trung bình từng học sinh và tìm người có điểm cao nhất.

**Hướng dẫn**:

* Duyệt qua từng tuple, dùng `sum()` và `len()` để tính trung bình.
* So sánh để tìm học sinh cao điểm nhất.

---

### Bài 14. Học sinh giao lưu

**Yêu cầu**: Cho 3 danh sách học sinh của 3 lớp.
Tìm các bạn có mặt ở cả 3 lớp.

**Hướng dẫn**:

* Dùng `set()` và toán tử `&` để lấy phần giao nhau.

---

### Bài 15. Món ăn không trùng

**Yêu cầu**: Có danh sách 10 món ăn.
Người chơi chọn món ăn theo lượt, nếu ai chọn trùng sẽ bị cảnh báo.

**Hướng dẫn**:

* Dùng `set()` để kiểm tra món đã chọn.
* Nếu món đã có trong set thì báo trùng, ngược lại thêm vào set.

---

Bạn có muốn mình viết file `.py` hoặc `.ipynb` kèm lời giải đầy đủ cho từng bài này không?
Hoặc cần thêm 5 bài thực tế nâng cao như "quản lý bạn bè", "lập kế hoạch học tập", "trò chơi đoán chữ" cũng được nha.
