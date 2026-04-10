
# BÀI TẬP XỬ LÝ NGOẠI LỆ – PHIÊN BẢN DỄ THƯƠNG 🐱

## Bài 1: Chia bánh cho mèo con

Bạn có 10 cái bánh, muốn chia đều cho số mèo con được nhập từ bàn phím.

* Nếu nhập không phải số → báo lỗi
* Nếu nhập số 0 → báo lỗi "Không có mèo nào để chia bánh!"
* Nếu hợp lệ → in ra số bánh mỗi bé mèo được nhận

```python
# Gợi ý: dùng try-except để bắt ValueError và ZeroDivisionError
```

---

## Bài 2: Cân nặng của heo Peppa

Người dùng nhập cân nặng của Peppa. Nếu số nhập âm → raise ValueError với thông báo `"Cân nặng không thể âm, Peppa đâu phải bóng bay!"`
Nếu nhập đúng → in `"Peppa nặng: x kg"`

---

## Bài 3: Danh sách đồ uống

Cho danh sách đồ uống: `[2, 1, 0, "sữa", 3]` – mỗi phần tử là số chai còn lại.
Duyệt qua từng phần tử và "mở 1 chai uống". Nếu là `0` → báo `"Hết đồ uống!"`, nếu không phải số → báo `"Không thể mở loại này!"`
Ngược lại, in `"Bạn đã uống x chai"`

---

## Bài 4: Đăng ký học lớp múa cho gấu trúc

Viết hàm `dang_ky_lop(age)`

* Nếu `age < 2` → raise `"Gấu trúc còn nhỏ, chưa đi học được!"`
* Nếu `age > 10` → raise `"Gấu trúc lớn rồi, qua lớp yoga đi!"`
* Nếu hợp lệ → in `"Chào mừng đến lớp múa!"`

Gọi thử hàm với 1, 12, 5 và xử lý lỗi.

---

## Bài 5: Máy tính tình yêu 💘

Nhập 2 cái tên (name1, name2), toán tử tính điểm tình yêu: `+`, `-`, `*`, `/`
Mỗi chữ cái sẽ được quy đổi thành một số.
Nếu nhập toán tử sai → báo lỗi
Nếu chia cho 0 → báo lỗi `"Yêu là không thể chia 0!"`
Kết quả sẽ là: `"Tình yêu giữa A và B là: x điểm!"`

---

## Bài 6: Đoán thú cưng

Chương trình chọn ngẫu nhiên một con thú cưng: `"mèo"`, `"cún"`, `"chuột hamster"`.
Người chơi có 3 lần đoán. Nếu nhập sai kiểu dữ liệu hoặc đoán ngoài 3 loài trên → báo lỗi
Nếu đoán đúng → in `"Bạn là boss thật sự!"`
Nếu đoán sai 3 lần → in `"Thú cưng đã trốn mất!"`

---

## Bài 7: Cho thỏ ăn cà rốt

Viết hàm `cho_an(thuc_an)`

* Nếu `thuc_an != "cà rốt"` → raise `"Thỏ chỉ ăn cà rốt thôi!"`
* Nếu đúng → in `"Thỏ ăn ngon lành!"`
  Viết chương trình nhập thử từ bàn phím và bắt lỗi nếu cho sai món.

---

## Bài 8: Đọc nhật ký mèo Mun

Tập tin `nhatky_mun.txt` chứa nhật ký của mèo Mun. Viết chương trình mở file và đọc.

* Nếu file không tồn tại → báo `"Mun chưa viết gì hôm nay!"`
* Dù thành công hay thất bại → luôn in `"Kết thúc giờ đọc truyện"`

---

## Bài 9: Mật khẩu vào vườn thú

Danh sách mật khẩu là: `["houshoumarine", "peppapig123", "gautruc"]`
Yêu cầu người chơi nhập mật khẩu để mở cửa vườn thú. Nếu sai → báo `"Sai rồi, thử lại!"`
Nếu đúng → in `"Cửa mở, vào chơi với thú!"`
Nếu nhập sai quá 3 lần → in `"Bảo vệ đến rồi..."`

---

## Bài 10: Gấu trúc đi học Python

Tạo lớp `GauTruc` có:

* Thuộc tính: `name`, `age`
* Nếu `age < 2` hoặc `age > 12` → raise lỗi `"Tuổi không phù hợp để học Python"`

Tạo một số `GauTruc` và xử lý lỗi nếu có.

