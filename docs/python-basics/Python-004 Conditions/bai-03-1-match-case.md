
# Bài 4-3: Match Case trong Python

Từ phiên bản Python 3.10, một cú pháp mới mang tên `match case` được giới thiệu giúp việc so sánh và xử lý điều kiện trở nên rõ ràng, ngắn gọn hơn so với `if-elif-else`. Cú pháp này giống như `switch case` trong các ngôn ngữ khác nhưng mạnh mẽ hơn vì hỗ trợ *pattern matching* – tức là so khớp theo cấu trúc dữ liệu.

## Cú pháp cơ bản

```python
match biến:
    case mẫu_1:
        # mã lệnh nếu khớp mẫu_1
    case mẫu_2:
        # mã lệnh nếu khớp mẫu_2
    case _:
        # mặc định nếu không khớp mẫu nào
```

`_` là ký hiệu đại diện cho mọi giá trị, tương đương với "default".

---

## 1. So khớp với giá trị cụ thể (constant)

```python
def kiem_tra_so(x):
    match x:
        case 10:
            print("Số là 10")
        case 20:
            print("Số là 20")
        case _:
            print("Không phải 10 hay 20")

kiem_tra_so(10)
kiem_tra_so(30)
```

---

## 2. Sử dụng `or` để so khớp nhiều giá trị

```python
def kiem_tra(x):
    match x:
        case 1 | 3 | 5:
            print("Là số lẻ đặc biệt")
        case _:
            print("Không khớp")

kiem_tra(3)
kiem_tra(4)
```

---

## 3. Kết hợp điều kiện `if` trong case

```python
def so_chan(x):
    match x:
        case n if n % 2 == 0:
            print("Là số chẵn")
        case _:
            print("Không phải số chẵn")

so_chan(4)
so_chan(5)
```

---

## 4. So khớp với danh sách hoặc tuple (sequence)

```python
def xu_ly_danh_sach(data):
    match data:
        case [a, b]:
            print(f"Hai phần tử: {a}, {b}")
        case [a, b, c]:
            print(f"Ba phần tử: {a}, {b}, {c}")
        case _:
            print("Dữ liệu không khớp")

xu_ly_danh_sach([1, 2])
xu_ly_danh_sach([1, 2, 3])
xu_ly_danh_sach([1, 2, 3, 4])
```

---

## 5. So khớp với từ điển (dictionary)

```python
def thong_tin_nguoi(nguoi):
    match nguoi:
        case {"ten": ten, "tuoi": tuoi}:
            print(f"Tên: {ten}, Tuổi: {tuoi}")
        case {"ten": ten}:
            print(f"Tên: {ten}")
        case _:
            print("Không rõ thông tin")

thong_tin_nguoi({"ten": "An", "tuoi": 20})
thong_tin_nguoi({"ten": "Bình"})
thong_tin_nguoi({"diachi": "HN"})
```

---

## 6. So khớp với lớp (class)

```python
class Hinh:
    pass

class Tron(Hinh):
    def __init__(self, ban_kinh):
        self.ban_kinh = ban_kinh

class ChuNhat(Hinh):
    def __init__(self, rong, dai):
        self.rong = rong
        self.dai = dai

def kiem_tra_hinh(hinh):
    match hinh:
        case Tron(ban_kinh):
            print(f"Hình tròn, bán kính: {ban_kinh}")
        case ChuNhat(rong, dai):
            print(f"Hình chữ nhật: {rong}x{dai}")
        case _:
            print("Không rõ loại hình")

kiem_tra_hinh(Tron(5))
kiem_tra_hinh(ChuNhat(3, 7))
```

---

## Kết luận

Câu lệnh `match case` giúp viết mã dễ đọc hơn, đặc biệt trong các trường hợp phức tạp với danh sách, từ điển hoặc đối tượng. Đây là một tính năng hiện đại, rất hữu ích trong các chương trình xử lý dữ liệu hoặc điều kiện phân nhánh.

## Bài tập tự luyện 

**Bài tập 1: Kiểm tra ngày trong tuần**

* Input: Nhập vào một số nguyên từ 1 đến 7.
* Output:

  * Nếu nhập 1 → "Thứ Hai"
  * Nếu nhập 2 → "Thứ Ba"
  * …
  * Nếu nhập 7 → "Chủ Nhật"
  * Nếu nhập ngoài 1–7 → "Không hợp lệ"

Ví dụ:

```
Input: 3
Output: Thứ Tư
```

---

**Bài tập 2: Menu tính toán**

* Input:

  * Người dùng nhập lựa chọn (1–4).
  * Nhập hai số nguyên hoặc số thực a, b.
* Output:

  * Nếu chọn 1 → in a + b
  * Nếu chọn 2 → in a - b
  * Nếu chọn 3 → in a \* b
  * Nếu chọn 4 → in a / b (nếu b ≠ 0, nếu b = 0 thì báo lỗi "Không thể chia cho 0")
  * Nếu nhập khác 1–4 → "Lựa chọn không hợp lệ"

Ví dụ:

```
Input: 1
Input: 5
Input: 3
Output: Kết quả: 8
```

---

**Bài tập 3: Phân loại điểm**

* Input: Nhập vào điểm số (số nguyên hoặc thực từ 0 đến 10).
* Output:

  * 0–4 → "Yếu"
  * 5–6 → "Trung bình"
  * 7–8 → "Khá"
  * 9–10 → "Giỏi"
  * Ngoài 0–10 → "Điểm không hợp lệ"

Ví dụ:

```
Input: 8.5
Output: Khá
```

---

**Bài tập 4: Máy bán hàng tự động**

* Input: Nhập lựa chọn (1–4).
* Output:

  * 1 → "Bạn đã chọn Nước ngọt"
  * 2 → "Bạn đã chọn Cà phê"
  * 3 → "Bạn đã chọn Trà sữa"
  * 4 → Kết thúc chương trình (in ra "Thoát chương trình")
  * Khác → "Không có trong menu"

Ví dụ:

```
Input: 2
Output: Bạn đã chọn Cà phê
```

---

**Bài tập 5: Giải phương trình bậc nhất**

* Input: Nhập vào hai số a, b (hệ số của phương trình ax + b = 0).
* Output:

  * Nếu a = 0 và b = 0 → "Phương trình có vô số nghiệm"
  * Nếu a = 0 và b ≠ 0 → "Phương trình vô nghiệm"
  * Nếu a ≠ 0 → "Nghiệm của phương trình là x = -b/a"

Ví dụ 1:

```
Input: a = 2, b = -4
Output: Nghiệm của phương trình là x = 2.0
```

Ví dụ 2:

```
Input: a = 0, b = 5
Output: Phương trình vô nghiệm
```
