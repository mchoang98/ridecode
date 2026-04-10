# Bài 3-3: Toán tử logic

Toán tử logic trong Python được sử dụng để kết hợp hoặc kiểm tra các điều kiện - Các toán tử logic phổ biến là **AND**, **OR**, và **NOT** - Kết quả của các phép toán này là `True` hoặc `False` tùy thuộc vào các điều kiện được kiểm tra -

## Các toán tử logic

1. **`and` (Và)**  
   Toán tử `and` trả về `True` nếu và chỉ nếu tất cả các điều kiện đều đúng - Nếu ít nhất một điều kiện sai, kết quả sẽ là `False` -

   Ví dụ:
   ```python
   a = 5
   b = 3
   c = 10
   print(a > b and c > a)  # Kết quả: True
   print(a < b and c > a)  # Kết quả: False
   ```

2. **`or` (Hoặc)**  
   Toán tử `or` trả về `True` nếu ít nhất một điều kiện là đúng - Kết quả chỉ là `False` khi tất cả các điều kiện đều sai -

   Ví dụ:
   ```python
   a = 5
   b = 3
   c = 10
   print(a > b or c < a)  # Kết quả: True
   print(a < b or c < a)  # Kết quả: False
   ```

3. **`not` (Không)**  
   Toán tử `not` đảo ngược giá trị của điều kiện - Nếu điều kiện là `True`, nó sẽ trả về `False`, và nếu điều kiện là `False`, nó sẽ trả về `True` -

   Ví dụ:
   ```python
   a = 5
   print(not (a > 3))  # Kết quả: False
   print(not (a < 3))  # Kết quả: True
   ```

## Kết hợp các toán tử logic

Bạn có thể kết hợp nhiều toán tử logic để tạo ra các biểu thức phức tạp hơn -

Ví dụ:
```python
a = 5
b = 10
c = 15

# Kiểm tra nếu a > b và c > b
print(a > b and c > b)  # False

# Kiểm tra nếu a < b hoặc c > b
print(a < b or c > b)  # True

# Kiểm tra nếu không phải a > b và không phải c < b
print(not (a > b) and not (c < b))  # True
```

## Ví dụ về sử dụng toán tử logic

```python
a = 5
b = 10
c = 20

# Kiểm tra điều kiện với 'and'
if a < b and b < c:
    print("a nhỏ hơn b và b nhỏ hơn c")  # Kết quả: a nhỏ hơn b và b nhỏ hơn c

# Kiểm tra điều kiện với 'or'
if a > b or b < c:
    print("Hoặc a lớn hơn b, hoặc b nhỏ hơn c")  # Kết quả: Hoặc a lớn hơn b, hoặc b nhỏ hơn c

# Kiểm tra điều kiện với 'not'
if not (a > b):
    print("a không lớn hơn b")  # Kết quả: a không lớn hơn b
```

## Kết luận

Toán tử logic là một công cụ mạnh mẽ để kết hợp nhiều điều kiện trong Python - Bạn có thể sử dụng chúng để kiểm tra các điều kiện phức tạp và xây dựng các biểu thức logic trong các câu lệnh điều kiện (if statements) - Việc hiểu và sử dụng thành thạo toán tử logic sẽ giúp bạn viết mã hiệu quả và linh hoạt hơn -

--- 

Hy vọng bài học này giúp bạn hiểu rõ hơn về các toán tử logic trong Python!