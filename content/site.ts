/**
 * Nice Temizlik ve Gıda — tek içerik kaynağı.
 *
 * Sitedeki TÜM metin, bağlantı ve liste verisi bu dosyada durur.
 * Bileşenler metin gömmez; yalnızca buradan okur.
 * İçerik güncellemek için sadece bu dosyayı düzenlemek yeterlidir.
 */

/* -------------------------------------------------------------------------- */
/*  Web3Forms                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * web3forms.com üzerinden e-posta adresiyle ücretsiz alınan access key.
 * TODO: gerçek key girilecek — bu değer duruyorken form gönderimi başarısız olur.
 */
export const WEB3FORMS_KEY = 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/* -------------------------------------------------------------------------- */
/*  Alan adı                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Sitenin asıl adresi.
 * TODO: gerçek alan adı ile değiştirilecek.
 *
 * Geçici bir adreste (ör. Railway) yayınlarken bu değeri değiştirmek yerine
 * ortam değişkeni verin; build sırasında o kullanılır:
 *   NEXT_PUBLIC_SITE_URL=https://xxx.up.railway.app
 *   NEXT_PUBLIC_NOINDEX=true
 */
const DEFAULT_SITE_URL = 'https://www.nicetemizlikvegida.com';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
).replace(/\/+$/, '');

/* -------------------------------------------------------------------------- */
/*  Tipler                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Kullanılabilir ikon anahtarları. Karşılıkları `components/Icon.tsx` içindeki
 * registry'de tanımlıdır; oraya eklemeden buraya yeni anahtar yazılamaz.
 */
export type IconName =
  | 'boxes'
  | 'truck'
  | 'receipt'
  | 'sprayCan'
  | 'droplets'
  | 'packageOpen'
  | 'shoppingBasket'
  | 'wheat'
  | 'recycle'
  | 'washingMachine'
  | 'scrollText'
  | 'box'
  | 'sparkles'
  | 'hotel'
  | 'restaurant'
  | 'flame'
  | 'cake'
  | 'bread'
  | 'hospital'
  | 'milk'
  | 'car'
  | 'brush'
  | 'ship'
  | 'anchor'
  | 'factory'
  | 'phone'
  | 'clipboard'
  | 'route';

export type Link = { readonly label: string; readonly href: string };

export type Card = {
  readonly icon: IconName;
  readonly title: string;
  readonly body: string;
};

export type Chip = { readonly icon: IconName; readonly label: string };

export type Reason = { readonly title: string; readonly body: string };

export type Img = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

/* -------------------------------------------------------------------------- */
/*  İçerik                                                                     */
/* -------------------------------------------------------------------------- */

const contact = {
  phoneDisplay: '0552 119 64 23',
  phoneHref: 'tel:+905521196423',
  phoneIntl: '+90 552 119 64 23',
  whatsappHref:
    'https://wa.me/905521196423?text=' +
    encodeURIComponent('Merhaba, işletmem için teklif almak istiyorum.'),
  whatsappLabel: "WhatsApp'tan yaz",
  address: {
    street: 'Güzelçamlı Mahallesi, Milli Park Caddesi No: 213/C',
    district: 'Kuşadası',
    city: 'Aydın',
    country: 'Türkiye',
    postalCode: '', // TODO: müşteri bilgisi bekleniyor — posta kodu
    full: 'Güzelçamlı Mahallesi, Milli Park Caddesi No: 213/C, Kuşadası / Aydın',
  },
  mapsEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent(
      'Güzelçamlı Mahallesi Milli Park Caddesi No 213/C Kuşadası Aydın',
    ) +
    '&hl=tr&z=16&output=embed',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Güzelçamlı Mahallesi Milli Park Caddesi No 213/C Kuşadası Aydın',
    ),
  // TODO: müşteri bilgisi bekleniyor — çalışma saatleri, e-posta adresi
} as const;

export const site = {
  company: {
    name: 'Nice Temizlik ve Gıda',
    shortName: 'Nice',
    tagline: 'Temizlik ve hijyen tedariki',
    description:
      'Kuşadası merkezli, Türkiye geneline hizmet veren temizlik malzemesi, hijyen ve ambalaj ürünleri tedarikçisi.',
  },

  contact,

  nav: [
    { label: 'Ne Yapıyoruz', href: '#ne-yapiyoruz' },
    { label: 'Ürün Grupları', href: '#urun-gruplari' },
    { label: 'Sektörler', href: '#sektorler' },
    { label: 'Neden Nice', href: '#neden-nice' },
    { label: 'Sevkiyat', href: '#sevkiyat' },
    { label: 'İletişim', href: '#iletisim' },
  ] as const satisfies readonly Link[],

  hero: {
    eyebrow: 'Kuşadası merkezli · Türkiye geneli tedarik',
    title: 'Türkiye geneline temizlik ve hijyen tedariki',
    subtitle:
      'Otel, restoran, fabrika ve kurumlara tek elden temizlik malzemesi, hijyen ve ambalaj ürünleri tedariki. Sipariş bir telefon uzağınızda.',
    primaryCta: { label: "WhatsApp'tan Teklif Al", href: contact.whatsappHref },
    secondaryCta: { label: contact.phoneDisplay, href: contact.phoneHref },
    image: {
      src: '/images/hero-depo.webp',
      alt: 'Raflarında kolilerin dizili olduğu geniş bir tedarik deposunun koridoru',
      width: 1920,
      height: 1080,
    } satisfies Img,
  },

  whatWeDo: {
    eyebrow: 'Ne yapıyoruz',
    title: 'İşletmenizin tüketim kalemlerini tek tedarikçide toplayın',
    items: [
      {
        icon: 'boxes',
        title: 'Geniş ürün yelpazesi',
        body: 'Temizlik, hijyen ve ambalaj ihtiyacı tek tedarikçiden. Ayrı ayrı firmalarla uğraşmak yerine tüm kalemleri aynı yerden sipariş edersiniz.',
      },
      {
        icon: 'truck',
        title: 'Düzenli sevkiyat',
        body: 'İşletmenin tüketim temposuna göre planlı teslimat. Sipariş döngünüz oturduğunda stoğunuz sürekli hazır kalır.',
      },
      {
        icon: 'receipt',
        title: 'Kurumsal çalışma',
        body: 'Faturalı satış, cari hesap ve kurumsal müşteriye uygun süreç. Muhasebenizin beklediği düzende ilerleriz.',
      },
    ] as const satisfies readonly Card[],
  },

  products: {
    eyebrow: 'Ürün grupları',
    title: 'Tedarik ettiğimiz başlıca kalemler',
    intro:
      'Aşağıdaki gruplar işletmenizin ihtiyacına göre genişletilebilir. Aradığınız kalemi listede göremiyorsanız bize sorun.',
    // Gruplar müşterinin gönderdiği ürün kataloğu ve ek listesinden derlendi.
    // Marka adı ve bayilik ifadesi bilinçli olarak kullanılmadı.
    items: [
      {
        icon: 'sprayCan',
        title: 'Temizlik kimyasalları',
        body: 'Yüzey temizleyici, ağır yağ ve kir çözücü, kireç çözücü, çamaşır suyu, cam temizleyici, derz ve fayans temizleyici, çok amaçlı genel temizleyiciler.',
      },
      {
        icon: 'washingMachine',
        title: 'Bulaşık ve çamaşır ürünleri',
        body: 'Bulaşık makinesi deterjanı, parlatıcı ve tablet; elde yıkama deterjanı; çamaşır makinesi deterjanları ve yumuşatıcı çeşitleri.',
      },
      {
        icon: 'droplets',
        title: 'Sabun ve kişisel hijyen',
        body: 'Sıvı sabun, köpük sabun, ıslak mendil ve eldiven çeşitleri.',
      },
      {
        icon: 'scrollText',
        title: 'Kağıt ürünleri ve dispenserler',
        body: 'Z-havlu, hareketli havlu, içten ve alttan çekmeli tuvalet kağıdı, rulo havlu, dispenser peçete; bunlara uygun makine ve aparatlar.',
      },
      {
        icon: 'box',
        title: 'Ambalaj ve servis ürünleri',
        body: 'Pasta, baklava, pide, lahmacun, pizza ve cips kutuları; baskılı veya baskısız garson katlama peçete; karton bardak, köpük tabak, çorba kasesi, sızdırmaz kap, streç film, alüminyum folyo.',
      },
      {
        icon: 'brush',
        title: 'Temizlik ekipmanları ve çöp kovaları',
        body: 'Mop aparatları ve bezleri, mikrofiber bez, çift kovalı temizlik arabası, yer fırçası, ot süpürge, tuvalet fırçası, sap çeşitleri, sünger ve tel; endüstriyel, pedallı ve itmeli çöp kovaları, çöp poşetleri.',
      },
      {
        icon: 'car',
        title: 'Oto ve halı yıkama ürünleri',
        body: 'Oto şampuanı, jant parlatıcı, cila ve oto fırçası; halı yıkama şampuanı.',
      },
      {
        icon: 'sparkles',
        title: 'Oda parfümleri ve alan kokuları',
        body: 'Oda parfümleri ve genel alan kokuları.',
      },
      // Gıda grubu şimdilik eklenmiyor (müşteri kararı). Liste gelince buraya
      // { icon: 'wheat', title: 'Gıda ürünleri', body: '…' } şeklinde eklenir.
    ] as const satisfies readonly Card[],
  },

  sectors: {
    eyebrow: 'Hizmet verdiğimiz sektörler',
    title: 'Farklı işletme tiplerinin farklı tedarik ritmi vardır',
    intro:
      'Bir otelin haftalık tüketimi ile bir fırının günlük ihtiyacı aynı şekilde planlanmaz. Sevkiyatı işletmenin kendi temposuna göre kurarız.',
    items: [
      { icon: 'hotel', label: 'Oteller' },
      { icon: 'restaurant', label: 'Kafe ve restoranlar' },
      { icon: 'flame', label: 'Pide fırınları' },
      { icon: 'cake', label: 'Pastaneler' },
      { icon: 'bread', label: 'Unlu mamuller' },
      { icon: 'hospital', label: 'Hastaneler' },
      { icon: 'milk', label: 'Süt ve süt ürünleri firmaları' },
      { icon: 'car', label: 'Oto yıkamalar' },
      { icon: 'brush', label: 'Halı yıkama firmaları' },
      { icon: 'ship', label: 'Tur tekneleri' },
      { icon: 'anchor', label: 'Marinalar' },
      { icon: 'factory', label: 'Sanayi kuruluşları' },
    ] as const satisfies readonly Chip[],
  },

  band: {
    image: {
      src: '/images/bant-mutfak.webp',
      alt: 'Paslanmaz çelik tezgâh ve ekipmanlardan oluşan endüstriyel mutfak',
      width: 1920,
      height: 520,
    } satisfies Img,
    caption: 'Mutfaktan depoya, işletmenin her tüketim kalemi tek listede.',
  },

  partners: {
    eyebrow: 'Çözüm ortaklarımızdan bazıları',
    title: 'Birlikte çalıştığımız işletmeler',
    note: 'Listede yer alan işletmeler, düzenli tedarik yaptığımız müşterilerimizden bir bölümüdür.',
    items: [
      'Leyla Cafe',
      'Otomatik Marina',
      'Talin Turizm',
      'Antakya Döner',
      'Bey Döner',
      'Ercan Burger',
      'Acarlar Unlu Mamulleri',
      'Rakun Kafe',
      'İstanköy Grup',
      'Kanalsan A.Ş.',
    ] as const,
  },

  whyUs: {
    eyebrow: 'Neden Nice',
    title: 'Tedarikçi seçerken işletmenin bakması gereken dört şey',
    items: [
      {
        title: 'Tek tedarikçiden temizlik, hijyen ve ambalaj',
        body: 'Kimyasaldan kağıt ürününe, ekipmandan ambalaja tüm kalemleri tek muhatapla yönetirsiniz. Sipariş, teslimat ve fatura tek akışta ilerler.',
      },
      {
        title: 'Türkiye geneline sevkiyat',
        body: 'Kuşadası merkezliyiz; hizmet alanımız Aydın ve çevresiyle sınırlı değil, Türkiye geneline sevkiyat yapıyoruz.',
      },
      {
        title: 'Planlı ve düzenli teslimat',
        body: 'Tüketim temponuza göre kurulan sipariş döngüsüyle çalışırız; her seferinde sıfırdan planlamak gerekmez.',
      },
      {
        title: 'Kurumsal faturalandırma',
        body: 'Faturalı satış ve cari hesap düzeni. Kurumsal muhasebe süreçlerine uygun şekilde belgelendirilir.',
      },
    ] as const satisfies readonly Reason[],
    image: {
      src: '/images/depo-raf.webp',
      alt: 'Depo raflarında paletlenmiş ve etiketlenmiş koliler',
      width: 1000,
      height: 1250,
    } satisfies Img,
  },

  logistics: {
    eyebrow: 'Sevkiyat ve sipariş',
    title: 'Sipariş nasıl ilerliyor',
    steps: [
      {
        icon: 'phone',
        title: 'Telefon veya WhatsApp',
        body: 'İhtiyaç listenizi telefonla iletir ya da WhatsApp üzerinden yazarsınız. Katalog indirmenize, üye olmanıza gerek yok.',
      },
      {
        icon: 'clipboard',
        title: 'Liste ve teyit',
        body: 'Kalemleri ve miktarları birlikte netleştirir, siparişi teyit ederiz.',
      },
      {
        icon: 'route',
        title: 'Sevkiyat',
        body: 'Sipariş hazırlanır ve işletmenizin adresine sevk edilir.',
      },
    ] as const satisfies readonly Card[],
    // TODO: müşteri bilgisi bekleniyor — anlaşmalı kargo/nakliye firması, ortalama
    // teslim süresi, minimum sipariş tutarı veya adedi. Bu bilgiler gelmeden
    // aşağıdaki nota rakam veya süre yazılmayacak.
    note: 'Teslimat süresi, sevkiyat yöntemi ve minimum sipariş koşulları işletmenizin konumuna ve sipariş içeriğine göre değişir. Net bilgi için bizi arayın.',
  },

  contactSection: {
    eyebrow: 'İletişim',
    title: 'Teklif alın',
    intro:
      'İhtiyacınızı kısaca yazın, size dönelim. Acele eden işler için telefon ya da WhatsApp en hızlısı.',
    addressLabel: 'Adres',
    phoneLabel: 'Telefon',
    mapLabel: 'Harita',
    mapLinkLabel: "Google Haritalar'da aç",
    mapTitle: 'Nice Temizlik ve Gıda konumu — Güzelçamlı, Kuşadası',
    form: {
      title: 'Teklif formu',
      fields: {
        name: { label: 'Ad Soyad', placeholder: 'Adınız ve soyadınız' },
        company: { label: 'İşletme Adı', placeholder: 'Otel, restoran, firma adı' },
        phone: { label: 'Telefon', placeholder: '05XX XXX XX XX' },
        need: {
          label: 'İhtiyacınız',
          placeholder:
            'Hangi ürün gruplarına, ne sıklıkta ihtiyacınız olduğunu kısaca yazın.',
        },
      },
      submitLabel: 'Teklif İste',
      submittingLabel: 'Gönderiliyor…',
      successMessage:
        'Mesajınız bize ulaştı. En kısa sürede sizi arayacağız.',
      errorMessage:
        'Mesaj gönderilemedi. Lütfen tekrar deneyin veya bizi telefonla arayın.',
      requiredMessage: 'Lütfen zorunlu alanları doldurun.',
      requiredHint: 'Zorunlu alan',
      kvkkNote:
        'Formu gönderdiğinizde paylaştığınız bilgiler yalnızca size dönüş yapmak için kullanılır.',
    },
  },

  whatsappFab: {
    label: "WhatsApp'tan yazın",
    srLabel: "WhatsApp'tan mesaj gönderin",
  },

  footer: {
    about:
      'Kuşadası merkezli, Türkiye geneline temizlik malzemesi, hijyen ve ambalaj ürünleri tedariki yapan kurumsal tedarikçi.',
    navTitle: 'Sayfada',
    contactTitle: 'İletişim',
    copyright: `© ${new Date().getFullYear()} Nice Temizlik ve Gıda. Tüm hakları saklıdır.`,
  },

  seo: {
    siteUrl: SITE_URL,
    title: 'Nice Temizlik ve Gıda | Türkiye Geneline Temizlik ve Hijyen Tedariki',
    description:
      'Kuşadası merkezli Nice Temizlik ve Gıda; otel, restoran, fırın, hastane ve sanayi kuruluşlarına temizlik malzemesi, hijyen ve ambalaj ürünleri tedarik eder. Türkiye geneline sevkiyat.',
    ogImage: '/images/hero-depo.webp',
    ogImageAlt: 'Nice Temizlik ve Gıda tedarik deposu',
    locale: 'tr_TR',
  },
} as const;

export type Site = typeof site;
