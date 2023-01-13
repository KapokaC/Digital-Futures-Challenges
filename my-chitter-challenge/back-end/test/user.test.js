import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server.js";
import User from "../src/models/userSchema.js";
import testData from "./testData/mockUserData.js";
const testDataArray = testData.users;

chai.use(chaiHttp);

describe('Testing requests on the database', () => {

    const testServer = chai.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await User.deleteMany();
            console.log(`User collection cleared`);
        } catch (error) {
            console.log(`Error clearing user collection`)
            throw new Error(`Clearing database error`);
        }

        try {
            await User.insertMany(testDataArray);
            console.log(`User data inserted into user collection`);
        } catch (error) {
            console.log(`Error inserting into user collection`);
            throw new Error(`Insert into database error`)
        }
    });
    describe('/Register users', () => {

        it(`should not create a user without a name.firstname field`, async () => {

            let user = {
                name: {
                    lastName: "First",
                    userName: "Firstuser"
                },
                email: "first@email.com",
                password: "Firstuser2021@"
            }
            const res = await testServer.post(`/register`).send(user);

            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.eql(`Registration Failed`);
        });

        it(`should not create a user without a name.lastName field`, async () => {

            let user = {
                name: {
                    firstName: "First",
                    userName: "Firstuser"
                },
                email: "first@email.com",
                password: "Firstuser2021@"
            }
            const res = await testServer.post(`/register`).send(user);

            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.eql(`Registration Failed`);
        });

        it(`should not create a user without a name.userName field`, async () => {

            let user = {
                name: {
                    firstName: "First",
                    lastName: "Firstuser"
                },
                email: "first@email.com",
                password: "Firstuser2021@"
            }
            const res = await testServer.post(`/register`).send(user);

            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.eql(`Registration Failed`);
        });

        it(`should not create a user without a email field`, async () => {

            let user = {
                name: {
                    firstName: "First",
                    lastName: "Firstuser",
                    userName: "Firstuser1"
                },
                password: "Firstuser2021@"
            }
            const res = await testServer.post(`/register`).send(user);

            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.eql(`Registration Failed`);
        });

        it(`should not create a user without a password field`, async () => {

            let user = {
                name: {
                    firstName: "First",
                    lastName: "Firstuser",
                    userName: "Firstuser1"
                },
                email: "first@email.com"
            }
            const res = await testServer.post(`/register`).send(user);

            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.eql(`Registration Failed`);
        });

        it(`should create a user`, async () => {

            let user = {
                name: {
                    firstName: "First",
                    lastName: "TestName",
                    userName: "Firstuser"
                },
                email: "first@email.com",
                password: "Firstuser2021@"
            }
            const res = await testServer.post(`/register`).send(user);

            expect(res).to.have.status(201);
            expect(res).to.be.an(`object`);
            expect(res.body.message).to.eql(`User was registered successfully`);
        });

        it(`should not create a user with email thats already registered`, async () => {

            let user = {
                name: {
                    firstName: "First",
                    lastName: "TestName",
                    userName: "Firstuser"
                },
                email: "meep@email.com",
                password: "Firstuser2021@"
            }
            const res = await testServer.post(`/register`).send(user);

            expect(res).to.have.status(422);
            expect(res).to.be.an(`object`);
            expect(res.body.message).to.eql(`Registration Failed`);
        });

    })

})