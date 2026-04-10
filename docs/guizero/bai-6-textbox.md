# Bài 6: TextBox trong guizero

## 1. TextBox là gì?

`TextBox` là ô nhập văn bản trong guizero. Dùng để nhập tên, email, mật khẩu, số liệu hoặc các nội dung bất kỳ mà người dùng cần nhập vào chương trình.

---

## 2. Cú pháp tạo TextBox

```python
from guizero import App, TextBox

app = App()
textbox = TextBox(app)
app.display()
```

---

## 3. Các thuộc tính quan trọng

### ➤ Lấy và đặt giá trị

```python
value = textbox.value
textbox.value = "Hello"
```

### ➤ Ô nhập mật khẩu

```python
pwd = TextBox(app, hide_text=True)
```

### ➤ Ô nhập nhiều dòng

```python
note = TextBox(app, multiline=True, width=40, height=5)
```

### ➤ Tắt / bật TextBox

```python
textbox.disable()
textbox.enable()
```

### ➤ Kích thước

```python
textbox = TextBox(app, width=30, height=3)
```

---

## 4. Sự kiện khi TextBox thay đổi

```python
def on_change():
    print("Đang nhập:", box.value)

box = TextBox(app, command=on_change)
```

---

## 5. Ví dụ đầy đủ

```python
from guizero import App, Text, TextBox, PushButton, info

app = App(title="Demo TextBox")

Text(app, text="Nhập tên của bạn:")
name_box = TextBox(app, width=30)

def say_hello():
    info("Xin chào", f"Hello {name_box.value}!")

PushButton(app, text="Chào", command=say_hello)

app.display()
```

---

# 🎯 BÀI TẬP LUYỆN TẬP

## **Bài tập 1 – Đếm số ký tự**

Tạo chương trình có:

* 1 TextBox
* 1 nút "Đếm"
* Khi nhấn nút → hiện số ký tự người dùng đã nhập.

Yêu cầu: dùng `len(textbox.value)`.

---

## **Bài tập 2 – Kiểm tra đăng nhập**

Tạo giao diện có:

* TextBox username
* TextBox password (ẩn ký tự)
* Nút "Login"

Điều kiện:

* username = `"admin"`
* password = `"123"`
* Nếu đúng → thông báo "Đăng nhập thành công"
* Nếu sai → thông báo lỗi

---

## **Bài tập 3 – Ghi chú nhiều dòng**

Tạo ứng dụng có:

* 1 TextBox multiline làm ô ghi chú
* 1 nút "Lưu"

Khi bấm “Lưu”, ghi nội dung TextBox vào file `note.txt`.

Gợi ý:

```python
with open("note.txt", "w") as f:
    f.write(textbox.value)
```

