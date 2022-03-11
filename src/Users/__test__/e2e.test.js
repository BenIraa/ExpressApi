import request from 'suoertest';
import app from '../../';


describe('user tests', () => {
    describe('test sign up', () =>{
        let user, res;
        it('should signup unique user', async () =>{
            user = {name: 'ben iraa' , email: "beniraa50@gmail.com"};
            res = await request(app)
            .post('/users'
            .send(user))
            expect(res.body.message).toContain('succesfull registered')
        })
    })
})