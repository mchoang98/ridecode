# BÀI 11: CLEAN CODE TRONG PYTHON

---

## 1. Mục tiêu bài học

* Hiểu khái niệm Clean Code (code sạch)
* Nhận biết sự khác biệt giữa code xấu và code sạch
* Học cách đặt tên rõ ràng, chia nhỏ hàm, tránh lặp code
* Áp dụng Clean Code qua các ví dụ thực tế

---

## 2. Clean Code là gì?

**Clean Code (code sạch)** là đoạn mã:

* Dễ đọc
* Dễ hiểu
* Dễ bảo trì và mở rộng
* Người khác có thể đọc như một "câu chuyện", không cần đoán

---

## 3. Một số nguyên tắc cơ bản của Clean Code

| Nguyên tắc                                 | Mô tả ngắn gọn                                    |
| ------------------------------------------ | ------------------------------------------------- |
| Đặt tên rõ nghĩa                           | Không viết tắt tùy tiện, tên gợi ý đúng chức năng |
| Chia nhỏ hàm                               | Mỗi hàm nên làm một việc rõ ràng                  |
| Tránh lặp lại code (Don't Repeat Yourself) | Tái sử dụng khi có thể                            |
| Tách phần xử lý và phần hiển thị           | Không trộn lẫn tính toán với `print()`            |
| Viết hàm dễ tái sử dụng                    | Dùng tham số thay vì gắn giá trị cố định          |

---

## 4. Các ví dụ chuyển từ "code xấu" sang "code sạch"

---

### Ví dụ 1: Tính tổng các số lẻ từ 1 đến n

**Code chưa sạch:**

```python
n = 10
s = 0
for i in range(n+1):
    if i%2==1:
        s+=i
print(s)
```

**Code sạch:**

```python
def tong_so_le(n: int) -> int:
    tong = 0
    for so in range(1, n + 1):
        if so % 2 == 1:
            tong += so
    return tong

print(tong_so_le(10))
```

**Giải thích cải tiến:**

* Đặt tên rõ ràng: `tong_so_le`, `so`, `tong`
* Dùng hàm để dễ tái sử dụng, kiểm thử

---

### Ví dụ 2: Kiểm tra số nguyên tố

**Code chưa sạch:**

```python
n=int(input())
check = True
if n<2:
    check=False
for i in range(2,n):
    if n%i==0:
        check=False
print("Đúng" if check else "Sai")
```

**Code sạch:**

```python
def la_so_nguyen_to(n: int) -> bool:
    if n < 2:
        return False
    for uoc in range(2, int(n ** 0.5) + 1):
        if n % uoc == 0:
            return False
    return True

so = int(input("Nhập số cần kiểm tra: "))
print("Đúng" if la_so_nguyen_to(so) else "Sai")
```

**Giải thích cải tiến:**

* Viết hàm riêng cho việc kiểm tra
* Không dùng biến `check` thừa
* Dễ kiểm thử và tái sử dụng

---

### Ví dụ 3: Tính tổng chữ số

**Code chưa sạch:**

```python
n = 12345
s = 0
while n > 0:
    s += n % 10
    n //= 10
print(s)
```

**Code sạch:**

```python
def tong_chu_so(n: int) -> int:
    tong = 0
    while n > 0:
        tong += n % 10
        n //= 10
    return tong

print(tong_chu_so(12345))
```

**Giải thích cải tiến:**

* Tách thành hàm
* Biến `tong` dễ hiểu hơn `s`

---

### Ví dụ 4: Tính giai thừa

**Code chưa sạch:**

```python
n=5
kq=1
for i in range(1,n+1):kq*=i
print(kq)
```

**Code sạch:**

```python
def giai_thua(n: int) -> int:
    ket_qua = 1
    for i in range(1, n + 1):
        ket_qua *= i
    return ket_qua

print(giai_thua(5))
```

**Giải thích cải tiến:**

* Không viết tắt như `kq`
* Code dễ hiểu, dễ đọc

---

### Ví dụ 5: Vẽ hình chữ nhật đặc

**Code chưa sạch:**

```python
w = 5
h = 3
for i in range(h):
    for j in range(w):
        print("*", end="")
    print()
```

**Code sạch:**

```python
def ve_hinh_chu_nhat(rong: int, cao: int, ky_tu: str = "*"):
    for _ in range(cao):
        print(ky_tu * rong)

ve_hinh_chu_nhat(5, 3)
```

**Giải thích cải tiến:**

* Có thể tái sử dụng với nhiều ký tự khác nhau
* Không lặp lại lệnh `print("*", end="")`

---

## 5. Tổng kết bài học

**Clean Code giúp:**

* Viết code dễ bảo trì
* Hạn chế lỗi
* Dễ cộng tác trong nhóm
* Dễ tái sử dụng và kiểm thử

**Nguyên tắc cần nhớ:**

* Đặt tên rõ ràng
* Viết hàm ngắn gọn, đúng mục đích
* Không lặp lại logic
* Tách biệt xử lý và in kết quả

---

## 6. Bài tập về nhà (gợi ý)

Viết lại các chương trình sau theo phong cách Clean Code:

1. Vẽ tam giác vuông rỗng
2. Tính tổng các số chia hết cho 3 từ 1 đến n
3. Kiểm tra số hoàn hảo
4. Vẽ bảng cửu chương cho 1 số
5. In số đảo ngược của một số nguyên

