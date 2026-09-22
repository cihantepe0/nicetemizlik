# Görsel kaynakları

Sitede kullanılan üç fotoğraf da **Pexels** üzerinden alınmıştır.
Pexels lisansı ticari kullanıma açıktır ve atıf zorunluluğu yoktur
(<https://www.pexels.com/license/>). Bu dosya yalnızca kaynak takibi içindir.

Görseller hotlink edilmemiştir: indirilip kırpılmış, WebP'ye çevrilmiş ve
`public/images/` altında sitenin kendi dosyaları olarak servis edilmektedir.

| Dosya | Boyut | Kullanıldığı yer | Kaynak |
| --- | --- | --- | --- |
| `public/images/hero-depo.webp` | 1920×1080 | Hero arka planı | https://www.pexels.com/photo/24862481/ |
| `public/images/depo-raf.webp` | 1000×1250 | "Neden Nice" bölümü ara görseli | https://www.pexels.com/photo/38195854/ |
| `public/images/bant-mutfak.webp` | 1920×520 | Bölüm ayırıcı bant | https://www.pexels.com/photo/33986701/ |

## Seçim ölçütleri

- Markasız / etiketsiz, nötr ve profesyonel kareler.
- İnsan yüzü içeren kare kullanılmadı.
- Depo, raf sistemi ve endüstriyel mutfak gibi tedarik işine yakın konular.

## Görsel değiştirmek isterseniz

1. Yeni görseli indirin (ticari kullanıma açık, atıf gerektirmeyen bir kaynaktan).
2. Aynı en-boy oranına kırpın:
   - hero → 16:9, depo-raf → 4:5, bant-mutfak → yaklaşık 3.7:1
3. WebP'ye çevirin, örneğin:
   ```
   cwebp -q 78 -m 6 yeni-gorsel.jpg -o public/images/hero-depo.webp
   ```
4. Boyut değiştiyse `content/site.ts` içindeki ilgili `width` / `height`
   değerlerini güncelleyin (layout shift olmaması için zorunlu).
5. Bu tabloya yeni kaynağı yazın.
