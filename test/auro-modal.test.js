import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
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
    debugger;
    await expect(title).to.not.equal(null);
  });
  it('auro-modal renders a header', async () => {
    const el = await fixture(html`
      <auro-modal header="Test"></auro-modal>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#modal-header');
    debugger;
    await expect(title.textContent).to.equal("\n                      Test\n                    ");
  });
});
