# 10 BÀI TẬP XỬ LÝ DANH SÁCH 

---

### 🐶 Bài 1: Danh sách thú cưng

**Mô tả:**
Nhập vào tên các thú cưng của bạn (dùng `input()`), lưu vào danh sách. Kết thúc khi nhập `"hết"`.

**Yêu cầu:**

* In ra danh sách vừa tạo
* In ra số lượng thú cưng bạn có

**Gợi ý:** dùng `while`, `.append()`, `.len()`

---

### 🍰 Bài 2: Danh sách bánh yêu thích

**Mô tả:**
Cho danh sách `["bánh kem", "bánh flan", "bánh bao", "bánh mì"]`

**Yêu cầu:**

* Hỏi người dùng muốn thêm loại bánh gì
* Thêm vào danh sách nếu chưa có
* Nếu đã có → in `"Bạn đã có loại bánh này rồi!"`

**Gợi ý:** dùng `in`, `.append()`

---

### 🐱 Bài 3: Mèo nào có tên dài nhất?

**Mô tả:**
Cho danh sách tên mèo: `["Mun", "Mướp", "Bông", "Xám Lông Dài"]`

**Yêu cầu:**

* Tìm tên mèo dài nhất
* In ra tên và độ dài của tên đó

**Gợi ý:** dùng vòng `for`, `len()`, biến tạm

---

### 🍎 Bài 4: Trái cây nhiều vitamin

**Mô tả:**
Cho danh sách trái cây: `["cam", "ổi", "xoài", "bơ", "sầu riêng"]`

**Yêu cầu:**

* In ra những trái có tên dài hơn 3 ký tự
* Đếm xem có bao nhiêu trái như vậy

**Gợi ý:** dùng list comprehension hoặc `for` + `if`

---

### 🐇 Bài 5: Thỏ đi học

**Mô tả:**
Cho danh sách điểm kiểm tra của thỏ: `[7, 5, 10, 6, 9]`

**Yêu cầu:**

* Tính điểm trung bình
* In ra các điểm >= 7 (thỏ làm tốt)
* In ra các điểm < 7 (thỏ cần cố gắng)

**Gợi ý:** `sum()`, `len()`, `for` + `if`

---

### 🐧 Bài 6: Đếm chim cánh cụt

**Mô tả:**
Cho danh sách `["chim", "chim", "chim cánh cụt", "chim", "chim cánh cụt", "chim cánh cụt"]`

**Yêu cầu:**

* Đếm xem có bao nhiêu "chim cánh cụt"

**Gợi ý:** dùng `.count()` hoặc vòng `for`

---

### 📦 Bài 7: Dọn kho đồ chơi

**Mô tả:**
Cho danh sách đồ chơi: `["xe", "búp bê", "xe", "gấu", "búp bê", "gấu"]`

**Yêu cầu:**

* Xóa các món bị trùng → chỉ giữ lại mỗi loại 1 món
* In ra danh sách sau khi dọn dẹp

**Gợi ý:** dùng `set()` hoặc tự lọc qua `for`

---

### 🎂 Bài 8: Xếp bánh theo chiều cao

**Mô tả:**
Cho danh sách độ cao bánh sinh nhật: `[5, 2, 7, 3, 6]`

**Yêu cầu:**

* Sắp xếp bánh theo chiều cao từ thấp → cao
* Tìm bánh cao nhất và thấp nhất

**Gợi ý:** `.sort()`, `max()`, `min()`

---

### 📚 Bài 9: Danh sách sách yêu thích

**Mô tả:**
Người dùng nhập tên 5 quyển sách yêu thích

**Yêu cầu:**

* Lưu vào danh sách
* Sau đó in ra danh sách theo thứ tự chữ cái (A → Z)

**Gợi ý:** dùng `.sort()` hoặc `sorted()`

---

### 🧃 Bài 10: Nước trái cây đặc biệt

**Mô tả:**
Cho danh sách nguyên liệu: `["cam", "chanh", "dâu", "ổi", "chanh"]`

**Yêu cầu:**

* Đếm từng loại nguyên liệu
* In ra danh sách nguyên liệu không trùng lặp

**Gợi ý:** dùng `set()` để lọc và `count()` để đếm

---

Nếu bạn muốn mình:

* Tạo **file `.ipynb` hoặc `.py`** chứa cả lời giải + input mẫu
* Chuyển thành **bài kiểm tra có tự động chấm điểm**
* Viết thành **giao diện web mini** cho học sinh chơi

