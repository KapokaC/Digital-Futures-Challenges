import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js'

chai.use(chaiHttp);

describe(`Game route testing`, () => {

    it(`Should test the "/game" returns a 200 response`, async () => {
        const res = await chai.request(server).get('/game');
        expect(res).to.have.status(200);
        expect(res).to.be.html;
    })

    it(`Should test if the text "Against THE Computer" shows`, async () => {
        const res = await chai.request(server).get('/game');
        expect(res.text).to.contain('Against THE Computer');
    })

})