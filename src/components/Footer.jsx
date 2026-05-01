const SOCIAL_LINKS = [
  { label: 'YouTube', href: 'https://www.youtube.com/@theSphinx42' },
  { label: 'X / Twitter', href: 'https://x.com/THESPHINX42' },
  { label: 'X — HieroCrypts', href: 'https://x.com/hierocrypts' },
  { label: 'X — Nibiru', href: 'https://x.com/nibiruHQ' },
  { label: 'Instagram', href: 'https://www.instagram.com/thesphinx42' },
  { label: 'Instagram — Pyramid Art', href: 'https://www.instagram.com/pyramidartcollective' },
  { label: 'Ko-fi', href: 'https://ko-fi.com/sphinxmedia' },
]

const MUSIC_LINKS = [
  { label: 'Sphinx42 — Topic', href: 'https://www.youtube.com/channel/UCvVh7b0b0Khamni9YqUpmOQ' },
  { label: 'GlyphGirl — Topic', href: 'https://www.youtube.com/channel/UCRlDcTtKEuTFkXfbOOBSDzw' },
]

const ARCHIVE_LINKS = [
  { label: 'Pyramid Art Collective (Wix backup)', href: 'https://pyramidartcollective.wixsite.com/sphinx-media' },
]

function FooterLinkGroup({ heading, links }) {
  return (
    <div className="footer__link-group">
      <h3 className="footer__link-heading">{heading}</h3>
      <ul className="footer__link-list">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              className="footer__link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ecosystem">
        <FooterLinkGroup heading="Connect" links={SOCIAL_LINKS} />
        <FooterLinkGroup heading="Music Distribution" links={MUSIC_LINKS} />
        <FooterLinkGroup heading="Archive" links={ARCHIVE_LINKS} />
      </div>

      <div className="footer__divider" aria-hidden="true" />
      <p className="footer__quote">
        "Built in the spaces between success and failure.<br />
        Released with love."
      </p>
      <div className="footer__divider" aria-hidden="true" />
      <p className="footer__credit">
        Graveyard of Creation &nbsp;·&nbsp; All projects released to the commons
      </p>
    </footer>
  )
}
