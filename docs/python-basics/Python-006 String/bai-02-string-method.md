Dĩ nhiên! Đây là **Bài giảng 02 - Các phương thức xử lý chuỗi trong Python**, mình viết theo phong cách mạch lạc, dễ hiểu như đang học với giáo viên nhé:

---

# 📚 BÀI GIẢNG 02: CÁC PHƯƠNG THỨC XỬ LÝ CHUỖI TRONG PYTHON

Trong bài này, chúng ta sẽ học những phương thức cực kỳ **thường dùng** để thao tác với **chuỗi** trong Python.

---

# 1. `lower()` - Chuyển thành chữ thường

Biến toàn bộ chuỗi thành chữ thường.

```python
s = "Hello World"
print(s.lower())
```
👉 Kết quả:
```
hello world
```

---

# 2. `upper()` - Chuyển thành chữ hoa

Biến toàn bộ chuỗi thành chữ hoa.

```python
s = "hello"
print(s.upper())
```
👉 Kết quả:
```
HELLO
```

---

# 3. `capitalize()` - Viết hoa chữ cái đầu tiên

Chỉ chữ cái đầu tiên viết hoa, các chữ khác thành thường.

```python
s = "python programming"
print(s.capitalize())
```
👉 Kết quả:
```
Python programming
```

---

# 4. `title()` - Viết hoa chữ cái đầu mỗi từ

```python
s = "python programming language"
print(s.title())
```
👉 Kết quả:
```
Python Programming Language
```

---

# 5. `strip()` - Xóa khoảng trắng ở đầu và cuối

```python
s = "  Hello World  "
print(s.strip())
```
👉 Kết quả:
```
Hello World
```

> Ngoài `strip()`, còn có:
> - `lstrip()` : xóa khoảng trắng bên trái.
> - `rstrip()` : xóa khoảng trắng bên phải.

---

# 6. `replace(old, new)` - Thay thế chuỗi con

```python
s = "I love Python"
print(s.replace("Python", "Java"))
```
👉 Kết quả:
```
I love Java
```

---

# 7. `find(sub)` - Tìm vị trí đầu tiên của chuỗi con

Trả về **chỉ số** của ký tự đầu tiên tìm được, nếu không có trả về `-1`.

```python
s = "Hello World"
print(s.find("World"))
```
👉 Kết quả:
```
6
```

---

# 8. `count(sub)` - Đếm số lần xuất hiện chuỗi con

```python
s = "banana"
print(s.count("a"))
```
👉 Kết quả:
```
3
```

---

# 9. `startswith(sub)` - Kiểm tra chuỗi bắt đầu bằng sub?

```python
s = "Hello World"
print(s.startswith("Hello"))
```
👉 Kết quả:
```
True
```

---

# 10. `endswith(sub)` - Kiểm tra chuỗi kết thúc bằng sub?

```python
s = "example.txt"
print(s.endswith(".txt"))
```
👉 Kết quả:
```
True
```

---

# 11. `split(separator)` - Tách chuỗi thành danh sách

Mặc định `separator` là dấu cách `' '`.

```python
s = "apple,banana,cherry"
print(s.split(","))
```
👉 Kết quả:
```
['apple', 'banana', 'cherry']
```

---

# 12. `join(list)` - Nối danh sách thành chuỗi

```python
lst = ['Python', 'Java', 'C++']
print(" - ".join(lst))
```
👉 Kết quả:
```
Python - Java - C++
```

---

# 🎯 Tóm tắt nhanh

| Phương thức  | Công dụng                       |
|--------------|----------------------------------|
| `lower()`    | Chuyển thành chữ thường          |
| `upper()`    | Chuyển thành chữ hoa             |
| `capitalize()` | Viết hoa chữ đầu tiên          |
| `title()`    | Viết hoa chữ đầu mỗi từ           |
| `strip()`    | Xóa khoảng trắng 2 đầu           |
| `replace()`  | Thay chuỗi con                   |
| `find()`     | Tìm vị trí chuỗi con             |
| `count()`    | Đếm số lần xuất hiện             |
| `startswith()` | Kiểm tra bắt đầu bằng chuỗi    |
| `endswith()` | Kiểm tra kết thúc bằng chuỗi     |
| `split()`    | Tách chuỗi thành danh sách       |
| `join()`     | Ghép danh sách thành chuỗi       |

---

# 13. 🛠 Bài tập gợi ý

- Nhập 1 chuỗi, in ra dạng chữ hoa.
- Đếm xem trong chuỗi có bao nhiêu chữ cái 'e'.
- Kiểm tra chuỗi nhập vào có kết thúc bằng ".com" hay không.
- Viết chương trình đảo ngược chuỗi người dùng nhập.

---

# 🎯 Ghi nhớ:

> "Làm việc với chuỗi là nền tảng cơ bản trong lập trình Python. Nếu bạn xử lý chuỗi thành thạo, bạn sẽ làm chủ được dữ liệu dạng văn bản."

---

Bạn có muốn mình viết thêm 10 bài tập thực hành ứng dụng cao hơn (có đáp án) theo sát bài giảng 02 này không? 🚀  
Mình làm nhanh cho bạn nếu cần nhé! 🎯✨ 