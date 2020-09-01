import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import '../src/auro-modal.js';

describe('auro-modal', () => {
  it('auro-modal is accessible', async () => {
    const el = await fixture(html`
      <auro-modal></auro-modal>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-modal custom element is defined', async () => {
    const el = await !!customElements.get("auro-modal");

    await expect(el).to.be.true;
  });

  it('auro-modal blocking does not render a close icon', async () => {
    const el = await fixture(html`
      <auro-modal blocking></auro-modal>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#modal-close');
    await expect(title).to.equal(null);
  

  });
  it('auro-modal non-blocking renders a close icon', async () => {
    const el = await fixture(html`
      <auro-modal></auro-modal>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#modal-close');
    await expect(title).to.not.equal(null);
  });
  it('auro-modal renders a header', async () => {
    const el = await fixture(html`
      <auro-modal header="Test"></auro-modal>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#modal-header');
    await expect(title.textContent).to.equal("\n                      Test\n                    ");
  });
  it('auro-modal closes on non-blocking background click', async () => {
    const el = await fixture(html`
      <auro-modal header="Test"></auro-modal>
    `);

    const root = el.shadowRoot;
    const background = root.querySelector('#modal-overlay');
    let listener = oneEvent(background, 'click');
    background.click();
    await listener;
    expect(el.getAttribute('open')).to.equal(null);
  });
});
