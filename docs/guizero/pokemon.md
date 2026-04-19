# ⚔️ SPEC NGẮN GỌN: Skill – Hệ – Chỉ số

## 1. Chỉ số Pokémon

Mỗi Pokémon có:

```text
HP       (máu)
ATK      (tấn công)
DEF      (phòng thủ)
TYPE     (hệ)
```

---

## 2. Hệ (type)

Dùng 3 hệ cơ bản (đủ cho CLI):

```text
Fire > Grass
Grass > Water
Water > Fire
```

### Multiplier:

| Quan hệ     | Damage |
| ----------- | ------ |
| Khắc hệ     | x2     |
| Bị khắc     | x0.5   |
| Bình thường | x1     |

---

## 3. Skill (chiêu)

Mỗi skill có:

```text
name
power      (sức mạnh)
type       (hệ skill)
accuracy   (tỉ lệ trúng %)
```

---

## 4. Công thức damage (chuẩn CLI)

```text
damage = (ATK * power / DEF) * type_multiplier * random(0.8 → 1.2)
```

### Giải thích nhanh:

* `ATK`: chỉ số người đánh
* `DEF`: chỉ số người bị đánh
* `power`: sức mạnh skill
* `type_multiplier`: theo hệ

---

## 5. Accuracy (đòn trượt)

```text
if random > accuracy → MISS
```

---

## 6. Critical hit (optional)

```text
10% chance → damage x2
```

---

## 7. Ví dụ thực tế

```text
Pikachu (Electric) dùng Thunder Shock (power=40)
đánh Squirtle (Water)

→ Electric > Water → x2

damage = (55 * 40 / 50) * 2 * random
```

---

## 8. Skill mẫu

```python
moves = [
    {"name": "Tackle", "power": 40, "type": "normal", "accuracy": 1.0},
    {"name": "Ember", "power": 50, "type": "fire", "accuracy": 0.9},
]
```

---

## 9. Tối thiểu phải có

* 1 Pokémon có ≥ 2 skill
* Có type system
* Có miss (accuracy)
* Có random damage

---

## 10. Nếu muốn đúng “chất Pokémon” hơn

Thêm:

* STAB (same type bonus x1.5 nếu skill cùng hệ)
* Status effect (burn, poison)


