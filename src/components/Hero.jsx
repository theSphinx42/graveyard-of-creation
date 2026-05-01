export default function Hero() {
  return (
    <header className="hero">
      <img
        src="/logo.png"
        alt="Graveyard of Creation"
        className="hero__logo"
        width="240"
        height="240"
      />
      <p className="hero__eyebrow">Experimental Forge</p>
      <h1 className="hero__title">Graveyard of Creation</h1>
      <p className="hero__tagline">
        Archive of builds from the creative void.<br />
        Most work, some don't. All are gifts to the commons.
      </p>
      <div className="hero__flame" aria-hidden="true" />
    </header>
  )
}
