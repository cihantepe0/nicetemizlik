import { site } from '@/content/site';

const { band } = site;

/** Bölümler arasında nefes aldıran görsel bant. */
export function PhotoBand() {
  return (
    <section aria-hidden className="relative isolate h-40 overflow-hidden bg-ink sm:h-56 lg:h-64">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={band.image.src}
        alt=""
        width={band.image.width}
        height={band.image.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,16,32,0.94)_0%,rgba(11,16,32,0.62)_45%,rgba(11,16,32,0.88)_100%)]"
      />
      <div className="container-nice flex h-full items-center">
        <p className="max-w-md font-display text-lg font-medium leading-snug text-cream sm:text-xl lg:text-2xl">
          {band.caption}
        </p>
      </div>
    </section>
  );
}
