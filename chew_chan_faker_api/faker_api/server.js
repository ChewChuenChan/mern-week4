const express = require ('express');
const { faker } =require('@faker-js/faker') ;

const app = express();
const PORT = 8000;


const createUser = ()=>{
    return{
        _id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone_number: faker.phone.number()
    }


};

const createCompany = () =>{
    return{
        _id: faker.datatype.uuid(),
        company_name: faker.company.companyName(),
        company_address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address. country()
        },
    }

};

app.get("/api/users/new",(req,res) =>{
    console.log("Running route new users")
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new",(req,res) =>{
    console.log("Running route new companies")
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company",(req,res) =>{
    console.log("Running route new user and company")
    const newUser = createUser();
    const newCompany = createCompany();
    const userCompany = {
        user :newUser,
        company: newCompany,
    };
    res.json(userCompany);
});

app.listen(PORT,() =>{
    console.log(`Something is up and running on port ${PORT}`)
})

