export default function MapSection() {
  return (
    <div className="w-full h-100 rounded-2xl overflow-hidden mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.6540308765047!2d112.360543873908!3d-8.13665898146599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7897fcb05cd3cf%3A0x33fe0b5275dae0fe!2sMasjid%20Al-Ikhlas%20Tuwuh%20Rejo!5e0!3m2!1sid!2sid!4v1771642339615!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
