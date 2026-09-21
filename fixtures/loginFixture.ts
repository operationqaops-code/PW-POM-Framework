import{test as base,expect} from '@playwright/test';
import { loginPage } from '../Pages/loginPage';
import { homePage } from '../Pages/homePage';


type MyFixture={
    homepage:homePage;
    loginpage:loginPage;
};

export const test=base.extend<MyFixture>({
     homepage:async({page},use)=>{
        await use(new homePage(page));


    },
    loginpage:async({page},use)=>{
        await use(new loginPage(page));
    }
});

export { expect };