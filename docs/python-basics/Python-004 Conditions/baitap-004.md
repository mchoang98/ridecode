
# Bài tập 04: Câu lệnh điều kiện 


### **Bài 1: Kiểm tra điều kiện vào lớp 10**

**Yêu cầu:**
Viết chương trình yêu cầu người dùng **nhập vào tuổi của học sinh**.

**Hướng dẫn:**

* Bước 1: Dùng hàm `input()` để yêu cầu người dùng nhập tuổi.
* Bước 2: Chuyển đổi giá trị nhập vào sang kiểu `int`.
* Bước 3: Sử dụng `if` để kiểm tra nếu tuổi nhỏ hơn 15 thì in ra thông báo **không đủ điều kiện vào lớp 10**.
* Ngược lại, in ra **đủ điều kiện**.

---

### **Bài 2: So sánh số nguyên với 100**

**Yêu cầu:**
Viết chương trình yêu cầu người dùng **nhập một số nguyên**. Kiểm tra và thông báo xem số đó **lớn hơn, nhỏ hơn hay bằng 100**.

**Hướng dẫn:**

* Bước 1: Nhập một số nguyên từ người dùng.
* Bước 2: So sánh giá trị đó với 100.
* Bước 3: Sử dụng `if`, `elif`, và `else` để in ra kết quả phù hợp.

---

### **Bài 3: Tìm số lớn nhất trong ba số nguyên**

**Yêu cầu:**
Viết chương trình yêu cầu người dùng **nhập 3 số nguyên**, sau đó tìm và in ra **giá trị lớn nhất**.

**Hướng dẫn:**

* Bước 1: Nhập 3 số nguyên khác nhau từ người dùng.
* Bước 2: Sử dụng các biểu thức `if`, `elif`, hoặc hàm `max()` để xác định giá trị lớn nhất.
* Bước 3: In kết quả ra màn hình.

---

### **Bài 4: Xếp loại học lực học sinh**

**Yêu cầu:**  
Viết chương trình nhập vào 3 loại điểm:

- **Điểm kiểm tra** (hệ số 1)  
- **Điểm giữa kỳ** (hệ số 2)  
- **Điểm cuối kỳ** (hệ số 3)  

Tính **điểm trung bình có trọng số**, sau đó xếp loại theo quy tắc:

- **Giỏi**: >= 8  
- **Khá**: từ 6.5 đến < 8  
- **Trung bình**: từ 5 đến < 6.5  
- **Yếu**: < 5


**Hướng dẫn:**

* Bước 1: Nhập 3 loại điểm từ người dùng.
* Bước 2: Tính điểm trung bình theo công thức:
  `Trung bình = (KT + 2*GK + 3*CK) / 6`
* Bước 3: Dựa vào giá trị trung bình, dùng `if-elif-else` để xếp loại.

---

### **Bài 5: Giải phương trình bậc hai**

**Yêu cầu:**
Giải phương trình bậc hai có dạng `ax² + bx + c = 0` với `a ≠ 0`.

**Hướng dẫn:**

* Bước 1: Nhập giá trị `a`, `b`, và `c`.
* Bước 2: Tính `delta = b² - 4ac`.
* Bước 3: Xét các trường hợp:

  * Delta < 0: vô nghiệm.
  * Delta = 0: phương trình có nghiệm kép.
  * Delta > 0: phương trình có 2 nghiệm phân biệt.
* Bước 4: Dùng hàm `sqrt()` trong `math` để tính căn bậc hai.

---

### **Bài 6: Tính hoa hồng cho đại lý**

**Yêu cầu:**
Nhập **doanh số bán hàng**. Tính hoa hồng nhận được dựa theo quy tắc sau (ví dụ):

* Doanh số < 100 triệu: 5%
* Từ 100 đến < 300 triệu: 10%
* Từ 300 triệu trở lên: 20%

**Hướng dẫn:**

* Bước 1: Nhập doanh số bán hàng.
* Bước 2: Xác định mức hoa hồng theo các mức đã cho.
* Bước 3: Tính số tiền hoa hồng = doanh số \* phần trăm hoa hồng.
* Bước 4: In kết quả.

---

### **Bài 7: Tính cước điện thoại bàn**

**Yêu cầu:**
Viết chương trình tính tiền cước điện thoại bàn cho hộ gia đình, với thông số giả định:

* Phí thuê bao cố định hàng tháng: 25.000đ
* 50 phút đầu: 600đ/phút
* Trên 50 phút: 400đ/phút

**Hướng dẫn:**

* Bước 1: Nhập số phút đã gọi.
* Bước 2: Áp dụng biểu phí theo mức sử dụng:

  * Nếu ≤ 50 phút: cước = 25.000 + phút × 600
  * Nếu > 50 phút: cước = 25.000 + (50 × 600) + (số phút - 50) × 400
* Bước 3: In kết quả ra màn hình.

---

### **Bài 8: Tính thuế thu nhập và lương ròng**

**Yêu cầu:**
Viết chương trình nhập vào **lương nhân viên**. Tính:

* **Thuế thu nhập**:

  * Lương ≤ 5 triệu: không thu thuế
  * 5–10 triệu: thuế 10%
  * > 10 triệu: thuế 20%
* **Lương ròng** = lương - thuế

**Hướng dẫn:**

* Bước 1: Nhập lương nhân viên.
* Bước 2: Xác định mức thuế phù hợp.
* Bước 3: Tính tiền thuế = lương \* %thuế.
* Bước 4: Tính lương ròng = lương - thuế.
* Bước 5: In kết quả ra màn hình.


