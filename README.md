# Nice Temizlik ve Gıda — kurumsal landing page

Kuşadası merkezli, Türkiye geneline temizlik malzemesi, hijyen ve ambalaj
ürünleri tedariki yapan Nice Temizlik ve Gıda için tek sayfalık tanıtım sitesi.
(Gıda tarafı müşteri kararıyla şimdilik sitede yer almıyor; firma adı hariç
tanıtım metinlerinde "gıda" geçmez.)

E-ticaret değildir: sepet, ödeme, üyelik, stok ve fiyat gösterimi yoktur.
Amaç firmayı ve ürün gruplarını anlatmak, ziyaretçiyi telefon/WhatsApp'a
yönlendirmektir.

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4**
- **Tam statik çıktı** (`output: 'export'`) — cPanel'li paylaşımlı hostingde
  Node.js sunucusu olmadan, doğrudan Apache ile çalışır.
- API route, middleware, server action, ISR yoktur.
- Fontlar build sırasında indirilip site içine gömülür; çalışma anında
  Google Fonts'a istek gitmez.

---

## 1. Kurulum ve build

```bash
npm install
npm run build
```

Build sonunda proje kökünde `out/` klasörü oluşur. Yüklenecek olan budur.

Geliştirme sunucusu:

```bash
npm run dev
```

> **Not:** Build sırasında font dosyalarını indirmek için internet bağlantısı
> gerekir. İndirilen fontlar `out/` içine kopyalanır; yayındaki site internet
> üzerinden font çekmez.

---

## 2. Railway'de yayınlama (geçici)

Hosting alınana kadar siteyi Railway üzerinde yayınlayabilirsiniz. Aynı build
çıktısı kullanılır — `output: 'export'` kalır, Railway `out/` klasörünü statik
olarak servis eder. Hosting'e geçerken kodda hiçbir değişiklik gerekmez.

1. Projeyi bir GitHub deposuna atın.
2. Railway'de **New Project → Deploy from GitHub repo** deyin.
3. Railway `railway.json` dosyasını okur; build ve start komutunu kendi ayarlar.
4. **Variables** sekmesinde iki değişken tanımlayın:

   | Değişken | Değer |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Railway'in verdiği adres, örn. `https://xxx.up.railway.app` |
   | `NEXT_PUBLIC_NOINDEX` | `true` |

5. Adresi aldıktan sonra `NEXT_PUBLIC_SITE_URL`'i güncelleyip yeniden deploy edin
   (ilk deploy'da adres henüz belli olmaz).

### `NEXT_PUBLIC_NOINDEX` neden önemli

Railway adresi Google'a düşerse, asıl alan adınız yayına girdiğinde aynı içerik
iki adreste görünür ve sıralamanız bölünür. `true` verildiğinde `robots.txt`
arama motorlarına kapatılır ve sitemap boş bırakılır.

**Asıl alan adına geçtiğinizde bu değişkeni silin**, yoksa site Google'a kapalı
kalır.

### Railway ile cPanel farkı

| | Railway | cPanel |
| --- | --- | --- |
| Servis eden | `serve` (Node) | Apache |
| Yönlendirme, önbellek | Railway yönetir | `.htaccess` |
| Adres | `NEXT_PUBLIC_SITE_URL` değişkeni | `content/site.ts` › `DEFAULT_SITE_URL` |

`.htaccess` Railway'de okunmaz, zararı da yoktur — dosya `out/` içinde durur ve
hosting'e geçince devreye girer.

---

## 3. cPanel'e yükleme

1. `npm run build` çalıştırın.
2. `out/` klasörünün **içindekileri** (klasörün kendisini değil) seçin.
   Gizli `.htaccess` dosyasının da seçildiğinden emin olun.
3. cPanel → **Dosya Yöneticisi** → `public_html` klasörünü açın.
4. Eski site dosyalarını silin, yeni dosyaları `public_html` içine yükleyin.
   (Kolaylık için `out/` içeriğini bir `.zip` yapıp yükleyip cPanel'de
   "Extract" demek en pratiğidir.)
5. Dosya Yöneticisi'nde gizli dosyalar görünmüyorsa:
   **Settings → Show Hidden Files (dotfiles)** seçeneğini açın ve
   `.htaccess` dosyasının yüklendiğini doğrulayın.

Node.js uygulaması tanımlamanıza gerek yoktur — site düz HTML/CSS/JS'tir.

### `.htaccess`

Örnek yapılandırma `public/.htaccess` dosyasındadır ve build sırasında
otomatik olarak `out/.htaccess` haline gelir. İçeriği:

- http → https yönlendirmesi
- www olmayan adresten www'ye yönlendirme
- `ErrorDocument 404 /404.html` ile özel 404 sayfası
- dizin listelemesinin kapatılması
- gzip sıkıştırma ve tarayıcı önbelleği
- temel güvenlik başlıkları

**www yerine www'siz adres kullanacaksanız** `public/.htaccess` içindeki
www yönlendirme bloğunu ters çevirin:

```apache
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

---

## 4. İçerik güncelleme

**Sitedeki tüm metin, telefon, adres ve liste verisi tek dosyadadır:
`content/site.ts`.** Bileşenlerin içinde metin yoktur.

Değiştirdikten sonra `npm run build` çalıştırıp `out/` içeriğini yeniden
yükleyin.

Dosyadaki başlıca bölümler:

| Alan | Ne işe yarar |
| --- | --- |
| `contact` | Telefon, WhatsApp bağlantısı, adres, harita |
| `nav` | Üst menü bağlantıları (anchor'lar) |
| `hero` | Ana başlık, alt metin, iki buton |
| `whatWeDo` | "Ne yapıyoruz" 3 kart |
| `products` | Ürün grupları kartları |
| `sectors` | Hizmet verilen sektör listesi |
| `partners` | Çözüm ortağı firma isimleri |
| `whyUs` | "Neden Nice" 4 madde |
| `logistics` | Sipariş adımları ve sevkiyat notu |
| `contactSection` | İletişim bölümü ve form metinleri |
| `footer` | Alt bilgi |
| `seo` | Sayfa başlığı, açıklama, alan adı |

### İkonlar

`content/site.ts` içinde ikonlar `'truck'`, `'hotel'` gibi anahtarlarla
belirtilir. Kullanılabilir anahtarların listesi aynı dosyadaki `IconName`
tipinde, lucide karşılıkları ise `components/Icon.tsx` içindedir.
Yeni bir ikon eklemek için önce `IconName`'e, sonra `Icon.tsx` içindeki
`registry`'ye eklemeniz gerekir; eksik bırakırsanız build hata verir.

### Logo

`components/Logo.tsx` dışında hiçbir yerde logo yolu geçmez. İki dosya vardır:

- `public/logo.svg` — açık zeminde kullanılan **koyu** sürüm
- `public/logo-light.svg` — koyu zeminde (hero, footer) kullanılan **açık** sürüm

Gerçek logo geldiğinde bu iki dosyayı aynı ölçülerde (`viewBox="0 0 200 44"`)
değiştirmek yeterlidir.

### Görseller

Bkz. `IMAGE_CREDITS.md` — kaynaklar, boyutlar ve değiştirme adımları.

---

## 5. Teklif formu (Web3Forms)

Form, statik hostingde çalışabilmek için sunucu tarafı olmadan,
tarayıcıdan `fetch` ile Web3Forms API'sine gönderilir.

**Yayına almadan önce yapılması gereken:**

1. <https://web3forms.com> adresinden, teklif taleplerinin düşmesini
   istediğiniz e-posta ile ücretsiz bir **access key** alın.
2. `content/site.ts` dosyasının en üstündeki değeri değiştirin:

   ```ts
   export const WEB3FORMS_KEY = 'buraya-gerçek-key';
   ```

3. `npm run build` çalıştırıp siteyi yeniden yükleyin.

Key değiştirilmediği sürece form gönderimi başarısız olur ve kullanıcıya
"Mesaj gönderilemedi" mesajı gösterilir (site çalışmaya devam eder).

---

## 6. Yayına almadan önce yapılacaklar

Kodda `TODO:` olarak işaretlenmiş, müşteriden bilgi bekleyen noktalar:

- [ ] **Web3Forms key** — `content/site.ts` › `WEB3FORMS_KEY`
- [ ] **Alan adı** — `content/site.ts` › `DEFAULT_SITE_URL` (tek yer;
      `robots.txt` ve `sitemap.xml` build sırasında buradan üretilir)
- [ ] **Gıda ürün grubu** — `content/site.ts` › `products.items`
      (şimdilik eklenmedi; liste gelince tek kart olarak eklenecek)
- [ ] **Sevkiyat detayı** — `content/site.ts` › `logistics.note`
      (kargo firması, teslim süresi, minimum sipariş bilgisi)
- [ ] **Logo** — `public/logo.svg` ve `public/logo-light.svg`
- [ ] **Ek iletişim bilgisi** — çalışma saatleri, e-posta, posta kodu
      (`content/site.ts` › `contact`)

Bu alanların hiçbirine varsayım yazılmamıştır. Kuruluş yılı, çalışan/müşteri
sayısı, sertifika, ödül, kapasite veya teslim süresi gibi doğrulanmamış hiçbir
bilgi sitede yer almaz.

Tüm `TODO`'ları görmek için:

```bash
grep -rn "TODO" content components public app
```

---

## 7. Proje yapısı

```
app/
  layout.tsx        fontlar, metadata, JSON-LD
  page.tsx          bölümlerin sırası
  globals.css       renk/tipografi tokenları, animasyonlar
  not-found.tsx     404 sayfası (out/404.html olarak üretilir)
components/         her bölüm için bir bileşen
content/site.ts     TÜM metin ve veri
public/
  images/           WebP görseller
  logo.svg          koyu logo
  logo-light.svg    açık logo
  .htaccess         Apache yapılandırması (cPanel için)
scripts/
  finalize-out.mjs  build sonrası robots.txt + sitemap.xml üretir
railway.json        Railway build/start ayarı
```

## 8. Erişilebilirlik ve performans notları

- Tek `<h1>`, düzenli başlık hiyerarşisi, semantik landmark'lar.
- Renk kontrastları WCAG AA seviyesinde.
- Klavye ile gezinilebilir; görünür focus halkaları var.
- "İçeriğe geç" atlama bağlantısı mevcut.
- Animasyonlar `prefers-reduced-motion` tercihine saygı duyar; JavaScript
  kapalıysa içerik yine tam görünür.
- Tüm görsellerde `width`/`height` tanımlı (layout shift yok); hero dışındaki
  görseller ve harita `loading="lazy"`.
