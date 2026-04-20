#  BÀI TẬP: Pokémo (dùng PokéAPI)

## 🎯 Mục tiêu

* Lấy dữ liệu Pokémon từ API
* Chuẩn hóa về format riêng
* Lấy và xử lý skill

---

## 📡 API (gộp)

<details>
<summary><b>Xem hướng dẫn API</b></summary>

### 1. Pokémon

```http
GET /pokemon/{name}
```

Lấy:

```text
name
HP      (stats.hp)
ATK     (stats.attack)
DEF     (stats.defense)
TYPE    (types[0])
moves
```

---

### 2. Move (Skill)

```http
GET /move/{id}
```

Lấy:

```text
name
power
accuracy
type
```

---

### 3. Chuẩn hóa dữ liệu

**Pokémon**

```python
{
  "name": str,
  "HP": int,
  "ATK": int,
  "DEF": int,
  "TYPE": str,
  "moves": list
}
```

**Move**

```python
{
  "name": str,
  "power": int,
  "type": str,
  "accuracy": float
}
```

---

### 4. Lưu ý

* Chỉ lấy 2–4 moves
* Mỗi move cần gọi API riêng
* Có thể gặp:

  * `power = null`
  * `accuracy = null`

</details>

---

## ⚔️ SPEC (game đơn giản)

### 1. Chỉ số

```text
HP, ATK, DEF, TYPE
```

---

### 2. Hệ

```text
Fire > Grass
Grass > Water
Water > Fire
```

| Quan hệ | Damage |
| ------- | ------ |
| Khắc    | x2     |
| Bị khắc | x0.5   |
| Thường  | x1     |

---

### 3. Skill

```text
name, power, type, accuracy
```

---

### 4. Damage

```text
damage = (ATK * power / DEF) * type_multiplier * random(0.8 → 1.2)
```

---

### 5. Cơ chế thêm

```text
MISS: random > accuracy
CRIT: 10% → x2
```

---

## ✅ Yêu cầu tối thiểu

* 1 Pokémon có ≥ 2 skill
* Có type system
* Có miss + random damage

---

## 🎯 Kết quả mẫu

```python
{
  "name": "pikachu",
  "HP": 35,
  "ATK": 55,
  "DEF": 40,
  "TYPE": "electric",
  "moves": [
    {"name": "thunder-shock", "power": 40, "type": "electric", "accuracy": 1.0}
  ]
}
```

