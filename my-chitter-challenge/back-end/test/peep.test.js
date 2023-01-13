import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";
import Peep from "../src/models/peepSchema.js";
import testData from "./testData/mockPeepData.js";
const testDataArray = testData.peeps;

chai.use(chaiHttp);

describe('Testing requests on the database', () => {

    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {

        try {
            await Peep.deleteMany();
            console.log(`Peep collection cleared`);
        } catch (error) {
            console.log(`Error clearing peep collection`)
            throw new Error(`Clearing database error`);
        }

        try {
            await Peep.insertMany(testDataArray);
            console.log(`Peep data inserted into peeps collection`);
        } catch (error) {
            console.log(`Error inserting into peep collection`);
            throw new Error(`Insert into database error`)
        }
    });

    describe('testing /Get peep', () => {

        it(`should return all the peeps as an array`, async () => {
            const res = await testServer
                .get(`/`)
                .send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.equal(testDataArray.length);

        });
    });

    describe('testing /post addPeep ', () => {

        it(`should addPeep`, async () => {
            let postPeep = {
                userName: "Iwewe",
                datePosted: "2022-12-29T16:00:00.000Z",
                peepBody: "Rakazvirova rikazhamba"
            };
            const res = await testServer
                .post(`/addPeep`)
                .send(postPeep);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);

        });

    })



});