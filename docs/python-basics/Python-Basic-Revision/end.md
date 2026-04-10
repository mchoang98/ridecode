# ÔN TẬP PYTHON: HÀM VÀ XỬ LÝ DANH SÁCH

## MỨC ĐỘ 1 – CƠ BẢN

### 1. `dem_ten_dai(tens)`

**Mô tả**: Viết hàm đếm bao nhiêu tên trong danh sách có độ dài lớn hơn 5 ký tự.

**Ví dụ**:

```python
dem_ten_dai(["An", "Nguyen", "Thanh", "Minh"])  # → 2
```

**Hướng dẫn**:

* Duyệt từng tên trong danh sách.
* Kiểm tra `len(ten) > 5`.
* Dùng biến đếm hoặc list comprehension.

---

### 2. `tinh_tong_diem(diem)`

**Mô tả**: Viết hàm tính tổng điểm các môn trong danh sách điểm học sinh.

**Ví dụ**:

```python
tinh_tong_diem([7.5, 8.0, 6.5])  # → 22.0
```

**Hướng dẫn**:

* Dùng `sum()` hoặc vòng lặp để cộng dồn từng điểm.

---

### 3. `kiem_tra_mat_khau(mat_khau)`

**Mô tả**: Viết hàm kiểm tra xem mật khẩu có hợp lệ không: phải có ít nhất 8 ký tự.

**Ví dụ**:

```python
kiem_tra_mat_khau("abc123")     # → False  
kiem_tra_mat_khau("myPassword") # → True
```

**Hướng dẫn**:

* Dùng biểu thức `len(mat_khau) >= 8` để kiểm tra.

---

## MỨC ĐỘ 2 – TRUNG BÌNH

### 4. `loc_email_gmail(emails)`

**Mô tả**: Viết hàm lọc ra các địa chỉ email thuộc Gmail trong danh sách.

**Ví dụ**:

```python
loc_email_gmail(["a@gmail.com", "b@yahoo.com", "c@gmail.com"])  
# → ["a@gmail.com", "c@gmail.com"]
```

**Hướng dẫn**:

* Duyệt từng email.
* Kiểm tra bằng `email.endswith("@gmail.com")`.

---

### 5. `diem_trung_binh_mon_hoc(ds_diem)`

**Mô tả**: Viết hàm tính điểm trung bình mỗi môn từ danh sách các học sinh.

**Ví dụ**:

```python
ds_diem = [
    {"toan": 7, "van": 6},
    {"toan": 8, "van": 7},
    {"toan": 9, "van": 5}
]
diem_trung_binh_mon_hoc(ds_diem)
# → {"toan": 8.0, "van": 6.0}
```

**Hướng dẫn**:

* Tạo biến tổng cho từng môn.
* Duyệt từng học sinh và cộng điểm.
* Chia cho tổng số học sinh.

---

### 6. `lay_ten_khong_trung(ds)`

**Mô tả**: Trả về danh sách tên không trùng, giữ lại tên đầu tiên xuất hiện.

**Ví dụ**:

```python
lay_ten_khong_trung(["An", "Binh", "An", "Lan"])  # → ["An", "Binh", "Lan"]
```

**Hướng dẫn**:

* Dùng danh sách mới để lưu kết quả.
* Kiểm tra `if ten not in ket_qua` trước khi thêm.

---

### 7. `ghep_lich(hs, lop)`

**Mô tả**: Ghép danh sách học sinh với lớp tương ứng.

**Ví dụ**:

```python
hs = ["An", "Binh"]
lop = ["10A", "10B"]
ghep_lich(hs, lop)  
# → [("An", "10A"), ("Binh", "10B")]
```

**Hướng dẫn**:

* Dùng `zip(hs, lop)` rồi chuyển thành danh sách tuple.

---

## MỨC ĐỘ 3 – NÂNG CAO

### 8. `ngay_hoc_lien_tiep(lich)`

**Mô tả**: Tìm chuỗi ngày học liên tiếp dài nhất trong danh sách ngày (dạng số nguyên).

**Ví dụ**:

```python
ngay_hoc_lien_tiep([1, 2, 3, 5, 6, 10])  # → [1, 2, 3]
```

**Hướng dẫn**:

* Duyệt qua từng phần tử, kiểm tra có tăng liên tiếp không.
* Dùng 2 danh sách: một cho chuỗi hiện tại, một để lưu chuỗi dài nhất.

---

### 9. `tim_cap_bai_tap(ds_diem, muc_tieu)`

**Mô tả**: Đếm số cặp bài tập có tổng điểm đúng bằng mục tiêu.

**Ví dụ**:

```python
tim_cap_bai_tap([1, 2, 3, 4], 5)  # → 2 (cặp 1+4 và 2+3)
```

**Hướng dẫn**:

* Duyệt 2 vòng lặp `i` và `j > i`.
* Nếu `ds_diem[i] + ds_diem[j] == muc_tieu`, tăng biến đếm.

---

### 10. `thong_ke_tu_bai_viet(words)`

**Mô tả**: Phân loại từ thành 3 nhóm:

* Từ viết hoa toàn bộ (viết tắt),
* Từ viết hoa chữ đầu (tên riêng),
* Từ thường.

**Ví dụ**:

```python
thong_ke_tu_bai_viet(["NASA", "Python", "học", "AI", "Sinh", "cách"])
# →
{
    "viet_tat": ["NASA", "AI"],
    "ten_rieng": ["Python", "Sinh"],
    "thuong": ["học", "cách"]
}
```

**Hướng dẫn**:

* Duyệt từng từ.
* Dùng `.isupper()`, `.istitle()` để kiểm tra.
* Phân loại vào từ điển kết quả.

