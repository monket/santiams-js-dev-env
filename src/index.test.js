import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const file = path.join(__dirname, 'index.html');
    const index = fs.readFileSync(file, 'utf-8');
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    });
  });
});
