# Bài 10: Drawing và hệ trục tọa độ trong guizero

## 1. Drawing là gì?

`Drawing` là vùng vẽ trong guizero, cho phép bạn vẽ:

* đường thẳng
* hình chữ nhật
* hình tròn
* văn bản
* và nhiều loại hình cơ bản khác

`Drawing` thường dùng để minh họa biểu đồ, hình học, game đơn giản, hoặc visualisation.

---

## 2. Hệ trục tọa độ trong Drawing

Guizero dùng **hệ tọa độ 2D dạng pixel**:

* Gốc tọa độ **(0, 0)** nằm ở **góc trên bên trái**.
* **x** tăng từ trái → phải
* **y** tăng từ trên → dưới

```
(0,0) ------------------> +x
  |
  |
  v
 +y
```

---

## 3. Cú pháp tạo Drawing

```python
from guizero import App, Drawing

app = App()
draw = Drawing(app, width=300, height=300)
app.display()
```

---

## 4. Các hàm vẽ quan trọng

### ➤ Đường thẳng

```python
draw.line(x1, y1, x2, y2, color="black", width=1)
```

### ➤ Hình chữ nhật

```python
draw.rectangle(x1, y1, x2, y2, color="red", outline=True)
```

### ➤ Hình tròn / ellipse

```python
draw.oval(x1, y1, x2, y2, color="blue", outline=False)
```

### ➤ Văn bản

```python
draw.text(x, y, "Hello", size=14, color="black")
```

### ➤ Xóa màn hình

```python
draw.clear()
```

---

## 5. Ví dụ: Vẽ trục tọa độ cơ bản

```python
from guizero import App, Drawing

app = App(title="Trục tọa độ")

draw = Drawing(app, width=300, height=300)

# Trục X
draw.line(0, 150, 300, 150, color="black")

# Trục Y
draw.line(150, 0, 150, 300, color="black")

# Ghi nhãn
draw.text(290, 155, "X")
draw.text(155, 5, "Y")
draw.text(155, 155, "(0,0)")

app.display()
```

---

# 🎨 6. Ví dụ tổng hợp

```python
from guizero import App, Drawing

app = App(title="Demo Drawing")

draw = Drawing(app, width=400, height=300)

# Vẽ các hình
draw.line(20, 20, 200, 20, color="blue", width=3)
draw.rectangle(20, 50, 150, 150, color="red")
draw.oval(200, 50, 350, 150, color="green")
draw.text(30, 160, "Các hình cơ bản", size=14)

app.display()
```

---

# 🎯 BÀI TẬP LUYỆN TẬP

## **Bài tập 1 – Vẽ trục tọa độ hoàn chỉnh**

Vẽ hệ trục OXY như sau:

* Trục X (0 → width)
* Trục Y (0 → height)
* Thêm mũi tên ở cuối trục
* Thêm nhãn “X”, “Y”, và gốc “O” (tại giữa màn hình)

---

## **Bài tập 2 – Vẽ 5 điểm trên hệ tọa độ**

Tạo danh sách tọa độ:

```
[(20, 30), (50, 80), (120, 60), (200, 100), (250, 40)]
```

Dùng vòng lặp để:

* vẽ các điểm (dùng hình tròn nhỏ)
* ghi nhãn số thứ tự cạnh từng điểm

Gợi ý: dùng `draw.oval()` bán kính 3px.

---

## **Bài tập 3 – Vẽ hình chữ nhật theo nhập liệu**

Tạo:

* 4 TextBox nhập: x1, y1, x2, y2
* Nút “Vẽ”
* Khi nhấn nút → vẽ hình chữ nhật tương ứng trên Drawing

Yêu cầu:

* Xóa hình cũ trước khi vẽ hình mới (`draw.clear()`)


