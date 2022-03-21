import request from 'supertest';
import app from '../../../';



describe('user test', () =>{
    describe('test signup', () =>{
        let user, res;
        it('should signup unique user', async() => {
           user = {firstname: "beniraa", lastname:"iraa", email: "now@gmail.com", telephone:"0987654321", password: "123456"};
           
           res = await request(app)
           .post('/signup')
           .send(user)
           console.log(res)
           expect(res.body.message).toContain('successfull registerd');
           
        })
    })
})

