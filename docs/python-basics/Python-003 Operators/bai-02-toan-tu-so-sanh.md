# Bài 3-2: Toán tử so sánh

Toán tử so sánh trong Python dùng để so sánh hai giá trị. Kết quả của các phép so sánh này là `True` (đúng) hoặc `False` (sai). Các toán tử so sánh phổ biến bao gồm:

## Các toán tử so sánh

1. **`==` (Bằng nhau)**  
   So sánh hai giá trị xem chúng có bằng nhau không.

   Ví dụ:
   ```python
   a = 5
   b = 5
   print(a == b)  # Kết quả: True
   ```

2. **`!=` (Khác nhau)**  
   So sánh hai giá trị xem chúng có khác nhau không.

   Ví dụ:
   ```python
   a = 5
   b = 3
   print(a != b)  # Kết quả: True
   ```

3. **`>` (Lớn hơn)**  
   Kiểm tra xem giá trị bên trái có lớn hơn giá trị bên phải không.

   Ví dụ:
   ```python
   a = 5
   b = 3
   print(a > b)  # Kết quả: True
   ```

4. **`<` (Nhỏ hơn)**  
   Kiểm tra xem giá trị bên trái có nhỏ hơn giá trị bên phải không.

   Ví dụ:
   ```python
   a = 3
   b = 5
   print(a < b)  # Kết quả: True
   ```

5. **`>=` (Lớn hơn hoặc bằng)**  
   Kiểm tra xem giá trị bên trái có lớn hơn hoặc bằng giá trị bên phải không.

   Ví dụ:
   ```python
   a = 5
   b = 5
   print(a >= b)  # Kết quả: True
   ```

6. **`<=` (Nhỏ hơn hoặc bằng)**  
   Kiểm tra xem giá trị bên trái có nhỏ hơn hoặc bằng giá trị bên phải không.

   Ví dụ:
   ```python
   a = 3
   b = 5
   print(a <= b)  # Kết quả: True
   ```

## Ví dụ về sử dụng toán tử so sánh

```python
a = 10
b = 20
c = 10

# Kiểm tra nếu a bằng b
print(a == b)  # False

# Kiểm tra nếu a không bằng b
print(a != b)  # True

# Kiểm tra nếu a lớn hơn b
print(a > b)  # False

# Kiểm tra nếu a nhỏ hơn b
print(a < b)  # True

# Kiểm tra nếu a lớn hơn hoặc bằng c
print(a >= c)  # True

# Kiểm tra nếu a nhỏ hơn hoặc bằng c
print(a <= c)  # True
```

## Kết luận

Toán tử so sánh là một phần quan trọng trong lập trình, giúp bạn thực hiện các phép so sánh giữa các giá trị. Bằng cách sử dụng toán tử so sánh, bạn có thể điều khiển luồng chương trình, kiểm tra điều kiện và ra quyết định trong các bài toán phức tạp.

--- 

Hy vọng bài viết này giúp bạn hiểu rõ hơn về các toán tử so sánh trong Python!