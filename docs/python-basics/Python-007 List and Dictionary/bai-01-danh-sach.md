# BÀI 7-1: Danh sách (List)

## I. Danh sách (List) là gì?

Danh sách là một kiểu dữ liệu trong Python có thể chứa nhiều giá trị, có thứ tự và có thể thay đổi sau khi tạo ra. Danh sách dùng để lưu trữ tập hợp dữ liệu như danh sách học sinh, danh sách điểm số,...

### Cú pháp tạo danh sách:

```python
ten_danh_sach = [giá_trị_1, giá_trị_2, ..., giá_trị_n]
```

### Ví dụ:

```python
ds_so = [1, 2, 3, 4, 5]
ds_hoa_qua = ["táo", "cam", "xoài"]
ds_pha_tron = [1, "hai", 3.0, True]
```

Video hướng dẫn: [https://www.youtube.com/watch?v=W8KRzm-HUcc](https://www.youtube.com/watch?v=W8KRzm-HUcc)

---

## II. Truy cập phần tử trong danh sách

### Truy cập theo chỉ số:

```python
fruits = ["táo", "cam", "xoài"]
print(fruits[0])  # táo
print(fruits[2])  # xoài
```

### Truy cập từ cuối danh sách (dùng chỉ số âm):

```python
print(fruits[-1])  # xoài
```

Video hướng dẫn: [https://www.youtube.com/watch?v=ohCDWZgNIU0](https://www.youtube.com/watch?v=ohCDWZgNIU0)

---

## III. Một số thao tác thường dùng với danh sách

| Thao tác        | Cú pháp / Hàm  | Mô tả                               |
| --------------- | -------------- | ----------------------------------- |
| Thêm phần tử    | `append(x)`    | Thêm x vào cuối danh sách           |
| Chèn phần tử    | `insert(i, x)` | Chèn x vào vị trí i                 |
| Xóa phần tử     | `remove(x)`    | Xóa phần tử đầu tiên có giá trị x   |
| Xóa theo chỉ số | `pop(i)`       | Xóa phần tử tại vị trí i            |
| Đếm phần tử     | `count(x)`     | Đếm số lần xuất hiện của x          |
| Tìm vị trí      | `index(x)`     | Trả về chỉ số đầu tiên có giá trị x |
| Sắp xếp         | `sort()`       | Sắp xếp danh sách tăng dần          |
| Đảo ngược       | `reverse()`    | Đảo ngược thứ tự                    |
| Sao chép        | `copy()`       | Tạo bản sao                         |
| Xóa toàn bộ     | `clear()`      | Xóa hết phần tử                     |

### Ví dụ:

```python
numbers = [4, 2, 7, 1]
numbers.append(5)      # [4, 2, 7, 1, 5]
numbers.sort()         # [1, 2, 4, 5, 7]
numbers.remove(2)      # [1, 4, 5, 7]
```

Video hướng dẫn: [https://www.youtube.com/watch?v=8vX4jd3yrsI](https://www.youtube.com/watch?v=8vX4jd3yrsI)

---

## IV. Duyệt danh sách

### Duyệt bằng vòng lặp `for`:

```python
fruits = ["cam", "xoài", "ổi"]
for fruit in fruits:
    print(fruit)
```

### Duyệt bằng chỉ số:

```python
for i in range(len(fruits)):
    print(f"Phần tử thứ {i}: {fruits[i]}")
```

Video hướng dẫn: [https://www.youtube.com/watch?v=lxew5wYAYVw](https://www.youtube.com/watch?v=lxew5wYAYVw)

---

## V. Toán tử với danh sách

| Toán tử | Ý nghĩa                             | Ví dụ                              |
| ------- | ----------------------------------- | ---------------------------------- |
| `+`     | Nối hai danh sách                   | `[1, 2] + [3, 4] => [1, 2, 3, 4]`  |
| `*`     | Lặp lại danh sách                   | `[1, 2] * 3 => [1, 2, 1, 2, 1, 2]` |
| `in`    | Kiểm tra phần tử có trong danh sách | `3 in [1, 2, 3] => True`           |

---

## VI. Một số hàm tích hợp với danh sách

| Hàm          | Chức năng                           | Ví dụ                            |
| ------------ | ----------------------------------- | -------------------------------- |
| `len(ds)`    | Trả về số phần tử trong danh sách   | `len([1, 2, 3]) => 3`            |
| `max(ds)`    | Trả về phần tử lớn nhất             | `max([1, 5, 3]) => 5`            |
| `min(ds)`    | Trả về phần tử nhỏ nhất             | `min([1, 5, 3]) => 1`            |
| `sum(ds)`    | Tổng các phần tử trong danh sách số | `sum([1, 2, 3]) => 6`            |
| `sorted(ds)` | Trả về bản sao danh sách đã sắp xếp | `sorted([3, 1, 2]) => [1, 2, 3]` |

---

## VII. Ví dụ thực hành

### Ví dụ 1: Tính tổng các số chẵn trong danh sách

```python
numbers = [1, 4, 5, 8, 10, 3]
tong_chan = 0
for num in numbers:
    if num % 2 == 0:
        tong_chan += num
print("Tổng số chẵn là:", tong_chan)
```

Video giải thích: [https://www.youtube.com/watch?v=lZQfNaVCGak](https://www.youtube.com/watch?v=lZQfNaVCGak)

---

### Ví dụ 2: Tìm phần tử lớn nhất

```python
numbers = [5, 8, 2, 10, 3]
print("Số lớn nhất là:", max(numbers))
```

Video tham khảo: [https://www.youtube.com/watch?v=xl0N7tHiwlw](https://www.youtube.com/watch?v=xl0N7tHiwlw)

---

## VIII. Bài tập luyện tập

1. Nhập vào danh sách gồm 5 số nguyên. Tính tổng các phần tử trong danh sách.
2. Nhập danh sách họ tên học sinh. In ra danh sách theo thứ tự bảng chữ cái.
3. Tạo một danh sách gồm các số từ 1 đến 100. In ra các số chia hết cho 3 và 5.
4. Viết chương trình kiểm tra xem một phần tử có tồn tại trong danh sách hay không.
5. Viết chương trình loại bỏ các phần tử trùng lặp trong danh sách.

