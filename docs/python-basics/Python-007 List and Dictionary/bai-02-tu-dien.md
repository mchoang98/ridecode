# Bài 7-2: Từ điển (Dictionary)

---

## I. Từ điển là gì?

Từ điển trong Python là một cấu trúc dữ liệu dùng để lưu trữ các cặp khóa - giá trị (key-value).

* Khóa là duy nhất, không trùng lặp.
* Giá trị có thể trùng nhau.
* Từ điển rất hữu ích để tra cứu dữ liệu theo khóa.

### Cú pháp tạo từ điển:

```python
ten_tu_dien = {khoa1: giatri1, khoa2: giatri2, ...}
```

### Ví dụ:

```python
sinh_vien = {
    "ten": "Nguyễn Văn A",
    "tuoi": 20,
    "lop": "12A1"
}
```

Video hướng dẫn: [https://www.youtube.com/watch?v=daefaLgNkw0](https://www.youtube.com/watch?v=daefaLgNkw0)

---

## II. Truy cập và thay đổi giá trị

### Truy cập giá trị theo khóa:

```python
print(sinh_vien["ten"])   # Nguyễn Văn A
```

### Hoặc dùng phương thức `get()`:

```python
print(sinh_vien.get("tuoi"))  # 20
print(sinh_vien.get("diem", "Không có"))  # Không có
```

### Thay đổi giá trị:

```python
sinh_vien["tuoi"] = 21
```

### Thêm cặp khóa - giá trị mới:

```python
sinh_vien["diem"] = 8.5
```

---

## III. Một số phương thức phổ biến với từ điển

| Phương thức     | Chức năng                                                  |
| --------------- | ---------------------------------------------------------- |
| `get(khoa)`     | Trả về giá trị tương ứng với khóa (None nếu không tồn tại) |
| `keys()`        | Trả về danh sách tất cả các khóa                           |
| `values()`      | Trả về danh sách tất cả các giá trị                        |
| `items()`       | Trả về danh sách các cặp `(khoa, giatri)`                  |
| `update(dict2)` | Cập nhật từ điển với các cặp khóa - giá trị từ dict2       |
| `pop(khoa)`     | Xóa khóa và trả về giá trị tương ứng                       |
| `popitem()`     | Xóa và trả về cặp khóa - giá trị cuối cùng                 |
| `clear()`       | Xóa toàn bộ phần tử trong từ điển                          |
| `copy()`        | Tạo bản sao của từ điển                                    |

---

## IV. Duyệt qua từ điển

### Duyệt theo khóa:

```python
for khoa in sinh_vien:
    print(khoa, ":", sinh_vien[khoa])
```

### Duyệt theo cặp `key-value`:

```python
for k, v in sinh_vien.items():
    print(f"{k}: {v}")
```

---

## V. Toán tử với từ điển

| Toán tử | Ý nghĩa                      | Ví dụ                        |
| ------- | ---------------------------- | ---------------------------- |
| `in`    | Kiểm tra sự tồn tại của khóa | `"ten" in sinh_vien` => True |
| `del`   | Xóa phần tử theo khóa        | `del sinh_vien["tuoi"]`      |

---

## VI. Ví dụ thực hành

### Ví dụ 1: Tạo và in thông tin học sinh

```python
hoc_sinh = {
    "ho_ten": "Trần Thị B",
    "tuoi": 16,
    "lop": "11B",
    "diem_tb": 8.0
}

for k, v in hoc_sinh.items():
    print(f"{k}: {v}")
```

### Ví dụ 2: Đếm số lần xuất hiện của các từ trong câu

```python
cau = "python python java c python java"
ds_tu = cau.split()
dem = {}

for tu in ds_tu:
    dem[tu] = dem.get(tu, 0) + 1

print(dem)
# Kết quả: {'python': 3, 'java': 2, 'c': 1}
```

---

## VII. Bài tập luyện tập

1. Tạo từ điển chứa thông tin một quyển sách: tên sách, tác giả, năm xuất bản. In ra từng thông tin.
2. Nhập danh sách điểm của học sinh (dưới dạng từ điển: tên → điểm), in danh sách học sinh có điểm trên 8.
3. Viết chương trình đếm số lần xuất hiện của các chữ cái trong một chuỗi.
4. Viết chương trình chuyển 2 danh sách `["a", "b", "c"]` và `[1, 2, 3]` thành từ điển: `{ "a": 1, "b": 2, "c": 3 }`.
5. Viết chương trình cho phép người dùng nhập vào tên và số điện thoại, lưu vào từ điển. Cho phép tra cứu theo tên.
