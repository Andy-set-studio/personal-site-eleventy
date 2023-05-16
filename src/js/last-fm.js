class LastFM extends HTMLElement {
  constructor() {
    super();

    this.track = null;
  }

  async load() {
    try {
      const res = await fetch('/wp-json/lastfm/v1/lastest-track');
      const data = await res.json();

      if (data.recenttracks) {
        this.track = data.recenttracks.track[0];
        this.render();
      }
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    this.innerHTML = `
    <p><strong>Latest track from Last.FM:</strong> <a href="${this.track.url}">${this.track.name}</a> by ${this.track.artist} from ${this.track.album}</p>
    `;
  }

  connectedCallback() {
    this.load();
  }
}

customElements.define('last-fm', LastFM);
