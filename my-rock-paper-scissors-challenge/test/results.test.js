import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

chai.use(chaiHttp);

describe(`Testing the resullt views `, () => {

    it(`Should render 'results' with status 200 and check if text is included`, async () => {
        const res = await chai.request(server).post(`/results`)

        expect(res).to.be.html;
        expect(res).to.have.status(200);
        expect(res.text).to.include(`results:`);
    })

    it(`Should render 404 status`, async () => {
        const res = await chai.request(server).get(`/`)

    })

})