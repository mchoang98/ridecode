# ÔN TẬP PYTHON: TOÁN TỬ – ĐIỀU KIỆN – VÒNG LẶP


## MỨC 1 – CƠ BẢN

**(Làm quen với toán tử, điều kiện đơn, vòng lặp đơn giản)**

### Bài 1: Kiểm tra chia hết cho 7 nhưng không chia hết cho 5

**Yêu cầu:** Nhập vào số nguyên `n`. In ra “Đúng” nếu `n` chia hết cho 7 nhưng **không** chia hết cho 5. Ngược lại, in “Sai”.

**Hướng dẫn:**

* Sử dụng toán tử chia dư `%`.
* Dùng câu lệnh `if` để kiểm tra đồng thời hai điều kiện.

---

### Bài 2: Tính tổng các số lẻ từ 1 đến `n`

**Yêu cầu:** Nhập vào số nguyên dương `n`. Tính tổng các số lẻ từ 1 đến `n`.

**Hướng dẫn:**

* Duyệt từ 1 đến `n` bằng vòng lặp.
* Kiểm tra số lẻ bằng cách kiểm tra `i % 2 == 1`.
* Cộng dồn tổng.

---

### Bài 3: In bảng cửu chương từ 2 đến 9

**Yêu cầu:** In ra bảng cửu chương từ 2 đến 9.

**Hướng dẫn:**

* Dùng vòng lặp lồng nhau: vòng ngoài từ 2 đến 9, vòng trong từ 1 đến 10.
* Mỗi dòng in kết quả phép nhân.

---

### Bài 4: Kiểm tra năm nhuận

**Yêu cầu:** Nhập vào một năm. Kiểm tra xem đó có phải là năm nhuận hay không.

**Hướng dẫn:**

* Dùng công thức kiểm tra năm nhuận: chia hết cho 4 và không chia hết cho 100, hoặc chia hết cho 400.
* In kết quả "Năm nhuận" hoặc "Không phải năm nhuận".

---

### Bài 5: In các số chia hết cho 4 từ `a` đến `b`

**Yêu cầu:** Nhập vào hai số nguyên `a` và `b` (với `a < b`). In ra tất cả các số chia hết cho 4 trong khoảng `[a, b]`.

**Hướng dẫn:**

* Duyệt từ `a` đến `b` bằng vòng lặp.
* Kiểm tra chia hết cho 4 bằng `%`.
* In từng số thỏa điều kiện.

---

### Bài 6: Kiểm tra 3 cạnh có tạo thành tam giác không

**Yêu cầu:** Nhập vào 3 số nguyên. Kiểm tra xem chúng có thể là độ dài 3 cạnh của một tam giác.

**Hướng dẫn:**

* Kiểm tra tổng hai cạnh bất kỳ có lớn hơn cạnh còn lại hay không.
* Nếu thỏa tất cả điều kiện trên, là tam giác.

---

### Bài 7: Tính tiền taxi

**Yêu cầu:** Nhập vào số km di chuyển. Tính số tiền phải trả theo quy tắc:

* 10 km đầu: 15.000 đồng/km
* Các km tiếp theo: 11.000 đồng/km

**Hướng dẫn:**

* Nếu km ≤ 10 thì chỉ nhân với 15.000
* Nếu > 10 thì tính 10 km đầu và phần dư nhân với 11.000

---

### Bài 8: Tính điểm trung bình và xếp loại học lực

**Yêu cầu:** Nhập điểm 3 môn Toán, Văn, Anh. Tính điểm trung bình và xếp loại:

* Giỏi: ≥ 8.0
* Khá: ≥ 6.5
* Trung bình: ≥ 5.0
* Yếu: < 5.0

**Hướng dẫn:**

* Tính trung bình bằng cộng 3 môn chia 3
* Dùng `if...elif...else` để phân loại

---

## MỨC 2 – TRUNG BÌNH

**(Sử dụng điều kiện lồng, danh sách, chuỗi, vòng lặp nâng cao)**

### Bài 1: Đếm số nguyên âm trong chuỗi

**Yêu cầu:** Nhập vào một chuỗi. Đếm số ký tự nguyên âm xuất hiện (`a, e, i, o, u`).

**Hướng dẫn:**

* Duyệt từng ký tự trong chuỗi
* So sánh ký tự đó với danh sách nguyên âm
* Đếm số lần xuất hiện

---

### Bài 2: Kiểm tra mật khẩu mạnh

**Yêu cầu:** Nhập chuỗi `password`. Kiểm tra xem có phải mật khẩu mạnh hay không.
Điều kiện mạnh: dài ≥ 8 ký tự, có ít nhất 1 chữ cái và 1 chữ số.

**Hướng dẫn:**

* Kiểm tra độ dài bằng `len()`
* Duyệt chuỗi để kiểm tra có chứa chữ cái (`isalpha()`) và chữ số (`isdigit()`)

---

### Bài 3: In số lẻ theo thứ tự ngược

**Yêu cầu:** Nhập `n` số nguyên vào danh sách. In ra các số lẻ trong danh sách đó theo thứ tự ngược.

**Hướng dẫn:**

* Dùng `for` hoặc `while` để nhập danh sách
* Duyệt danh sách đảo ngược và lọc số lẻ

---

### Bài 4: Kiểm tra chuỗi đối xứng

**Yêu cầu:** Nhập chuỗi. Kiểm tra xem chuỗi có đối xứng không (palindrome). Không phân biệt hoa thường.

**Hướng dẫn:**

* Chuyển chuỗi về chữ thường
* So sánh chuỗi với phiên bản đảo ngược

---

### Bài 5: Nhập danh sách điểm và tính tỷ lệ đạt

**Yêu cầu:** Nhập dãy điểm từ 0–10, kết thúc bằng -1. Tính phần trăm điểm từ 5 trở lên (đạt).

**Hướng dẫn:**

* Dùng `while` để nhập
* Đếm tổng số và số đạt
* Tính phần trăm đạt = (số đạt / tổng) × 100

---

### Bài 6: Mô phỏng ATM trả tiền

**Yêu cầu:** Nhập số tiền cần rút (chia hết cho 50,000). In ra số tờ tiền mỗi mệnh giá 500k, 200k, 100k, 50k cần dùng, ưu tiên mệnh giá lớn.

**Hướng dẫn:**

* Dùng phép chia lấy nguyên để tính số tờ
* Cập nhật số dư và tiếp tục chia cho mệnh giá nhỏ hơn

---

### Bài 7: Kiểm tra chuỗi chứa số điện thoại

**Yêu cầu:** Nhập một đoạn văn bản. Kiểm tra xem có chuỗi con nào là số điện thoại hợp lệ (10 chữ số, bắt đầu bằng 0).

**Hướng dẫn:**

* Duyệt chuỗi, tìm đoạn con độ dài 10
* Kiểm tra bắt đầu bằng '0' và toàn là chữ số

---

### Bài 8: Tìm số nguyên tố trong khoảng `a` đến `b`

**Yêu cầu:** Nhập hai số nguyên `a` và `b` (a < b). In ra tất cả số nguyên tố trong đoạn đó.

**Hướng dẫn:**

* Viết hàm kiểm tra nguyên tố
* Dùng vòng lặp để duyệt và in ra các số nguyên tố

---

## MỨC 3 – NÂNG CAO

**(Tư duy tổng hợp, xử lý nhiều bước)**

### Bài 1: Phân tích số thành tổng các lũy thừa của 2

**Yêu cầu:** Nhập số nguyên dương `n`. Tìm các số dạng 2^k sao cho tổng các số đó bằng `n`.

**Hướng dẫn:**

* Duyệt các số từ lớn đến nhỏ: 2^10, 2^9,...
* Nếu trừ được thì thêm vào danh sách kết quả

---

### Bài 2: In ra các số thuận nghịch chẵn 4 chữ số

**Yêu cầu:** In tất cả số có 4 chữ số, là số thuận nghịch (đối xứng) **và chẵn**.

**Hướng dẫn:**

* Duyệt từ 1000 đến 9999
* Chuyển sang chuỗi để kiểm tra đối xứng
* Kiểm tra chẵn bằng `% 2 == 0`

---

### Bài 3: Tìm chữ số xuất hiện nhiều nhất trong số nguyên

**Yêu cầu:** Nhập một số nguyên. Tìm chữ số xuất hiện nhiều nhất. Nếu có nhiều chữ số cùng tần suất, in tất cả.

**Hướng dẫn:**

* Chuyển số sang chuỗi
* Dùng dictionary để đếm từng chữ số
* Tìm giá trị tần suất lớn nhất

---

### Bài 4: Tính tích các chữ số khác 0

**Yêu cầu:** Nhập số nguyên dương `n`. Tính tích tất cả chữ số khác 0 trong `n`.

**Hướng dẫn:**

* Chuyển sang chuỗi, duyệt từng chữ số
* Bỏ qua nếu là '0', còn lại thì nhân tích

---

### Bài 5: Lọc sản phẩm giá cao

**Yêu cầu:** Nhập danh sách sản phẩm (gồm tên và giá). In ra sản phẩm có giá > 1 triệu.

**Hướng dẫn:**

* Dùng list lưu tuple (tên, giá)
* Duyệt qua danh sách và in những sản phẩm giá cao

---

### Bài 6: Trò chơi đoán số

**Yêu cầu:** Máy chọn ngẫu nhiên 1 số từ 1–100. Người chơi có 7 lần đoán. Mỗi lần đoán, máy báo lớn hơn, nhỏ hơn hay đúng.

**Hướng dẫn:**

* Dùng `random.randint()` để tạo số bí mật
* Vòng lặp giới hạn 7 lần, mỗi lần nhập số và phản hồi

---

### Bài 7: Xếp loại nhiều học sinh

**Yêu cầu:** Nhập thông tin nhiều học sinh (tên, điểm 3 môn), tính điểm trung bình và xếp loại từng người.

**Hướng dẫn:**

* Dùng list lưu mỗi học sinh là dict hoặc tuple
* Tính trung bình và phân loại như Bài 8 Mức 1

---

### Bài 8: Mô phỏng máy tính bỏ túi

**Yêu cầu:** Nhập hai số và một phép toán (`+ - * /`). In ra kết quả. Xử lý lỗi nếu chia cho 0 hoặc phép toán không hợp lệ.
