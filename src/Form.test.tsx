import {render,screen,fireEvent} from "@testing-library/react"
import Form from "./Form";



test('Check for button disablity when the form is invalid',()=>{
    let { getByLabelText, getByTestId } = render(<Form/>);

const firstnameInput=getByLabelText("First Name");
const lastnameInput=getByLabelText("Last Name");
const emailInput=getByLabelText("Email");
const DepartmentInput=getByLabelText("Department");
const GenderInput=getByLabelText("Gender");
const hobbyInput=getByLabelText("Hobbies");
const button = getByTestId("btn");

fireEvent.change(firstnameInput,{'target':{'value':''}})
fireEvent.change(lastnameInput,{'target':{'value':''}})
fireEvent.change(emailInput,{'target':{'value':''}})
fireEvent.change(DepartmentInput,{'target':{'value':''}})
fireEvent.change(GenderInput,{'target':{'value':''}})
fireEvent.change(hobbyInput,{'target':{'value':''}})

fireEvent.click(button)

expect(screen.getByTestId('btn').closest('button')).toBeDisabled()

})