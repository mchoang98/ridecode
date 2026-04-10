# BÀI 7-3: SET VÀ TUPLE TRONG PYTHON

## I. Tập hợp (Set) là gì?

**Set** là một kiểu dữ liệu trong Python dùng để lưu trữ **nhiều giá trị không trùng lặp**, không có thứ tự và có thể thay đổi.

### Cú pháp:

```python
tap_hop = {1, 2, 3}
```

### Đặc điểm:

* Không cho phép phần tử trùng lặp
* Không có thứ tự, không truy cập bằng chỉ số
* Có thể thêm, xóa phần tử

### Ví dụ:

```python
a = {1, 2, 3, 4, 4, 2}
print(a)  # Kết quả: {1, 2, 3, 4}
```

🎥 Video hướng dẫn: [https://www.youtube.com/watch?v=sBvaPopWOmQ](https://www.youtube.com/watch?v=sBvaPopWOmQ)

---

## II. Một số hàm xử lý Set

| Phương thức        | Mô tả                                   |
| ------------------ | --------------------------------------- |
| `add(x)`           | Thêm phần tử x vào tập hợp              |
| `remove(x)`        | Xóa phần tử x (nếu không có sẽ báo lỗi) |
| `discard(x)`       | Xóa phần tử x (nếu không có thì bỏ qua) |
| `clear()`          | Xóa toàn bộ phần tử trong set           |
| `union(s2)`        | Hợp hai tập hợp                         |
| `intersection(s2)` | Giao hai tập hợp                        |
| `difference(s2)`   | Hiệu tập hợp                            |

### Ví dụ:

```python
s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.union(s2))         # {1, 2, 3, 4, 5}
print(s1.intersection(s2))  # {3}
print(s1.difference(s2))    # {1, 2}
```

---

## III. Tuple là gì?

**Tuple** là một kiểu dữ liệu trong Python giống như danh sách (list) nhưng **không thể thay đổi (immutable)** sau khi tạo ra.

### Cú pháp:

```python
tup = (1, 2, 3)
```

Hoặc tuple một phần tử:

```python
tup1 = (5,)  # Dấu phẩy rất quan trọng
```

### Đặc điểm:

* Có thể chứa nhiều kiểu dữ liệu
* Có thứ tự và truy cập bằng chỉ số
* Không thể thay đổi nội dung

### Ví dụ:

```python
a = (1, 2, 3)
print(a[0])  # 1
```

🎥 Video hướng dẫn: [https://www.youtube.com/watch?v=W8AeOXa\_FEI](https://www.youtube.com/watch?v=W8AeOXa_FEI)

---

## IV. Một số hàm xử lý Tuple

| Hàm/phương thức | Mô tả                                     |
| --------------- | ----------------------------------------- |
| `len(t)`        | Độ dài tuple                              |
| `t.index(x)`    | Trả về chỉ số đầu tiên tìm thấy phần tử x |
| `t.count(x)`    | Đếm số lần xuất hiện của phần tử x        |

### Ví dụ:

```python
t = (1, 2, 2, 3)
print(len(t))       # 4
print(t.count(2))   # 2
print(t.index(3))   # 3
```

---

## V. So sánh Set, Tuple và List

| Tính chất       | List | Tuple | Set   |
| --------------- | ---- | ----- | ----- |
| Thay đổi được   | Có   | Không | Có    |
| Có thứ tự       | Có   | Có    | Không |
| Phần tử trùng   | Có   | Có    | Không |
| Truy cập chỉ số | Có   | Có    | Không |

---

## VI. Ví dụ thực hành

### Ví dụ 1: Tìm hợp và giao của hai tập hợp

```python
a = {1, 2, 3}
b = {2, 3, 4}
print("Hợp:", a.union(b))
print("Giao:", a.intersection(b))
```

### Ví dụ 2: Đếm số lần xuất hiện trong tuple

```python
t = (1, 1, 2, 3, 1)
print("Số lần 1 xuất hiện:", t.count(1))
```

---

## VII. Bài tập luyện tập

1. Tạo một set chứa các chữ cái trong chuỗi "lap trinh python", in ra tập hợp.
2. Nhập vào hai set số nguyên, in ra hợp và giao của chúng.
3. Viết chương trình kiểm tra một phần tử có trong set hay không.
4. Tạo một tuple chứa thông tin sinh viên (họ tên, tuổi, lớp), in từng giá trị.
5. Viết chương trình đếm số lần một phần tử xuất hiện trong tuple.


