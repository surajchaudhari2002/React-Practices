
import "./index.css";
import { useState } from "react";

export const Registration = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [phoneNumber, setphonenumber] = useState("")

    const handleOnChange = (event) => {
        const { name, value } = event.target
        switch (name) {
            case "firstName":
                setfirstName(value)
                break;

            case "lastName":
                setlastName(value)
                break;
            case "email":
                setemail(value)
                break;
            case "password":
                setpassword(value)
                break;
            case "phoneNumber":
                setphonenumber(value)
                break;

        }
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        const formdata={
            phoneNumber,
            lastName,
            email,
            password,
            phoneNumber
        }
        console.log(formdata)
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="container">

                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter firstName"
                        required
                        value={firstName}
                        onChange={handleOnChange}

                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        required
                        value={lastName}
                        onChange={handleOnChange}
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        value={email}
                        onChange={handleOnChange}
                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        value={password}
                        onChange={handleOnChange}
                    />

                    <label htmlFor="phone">
                        <b>Phone Number</b>
                    </label>

                    <input
                        type="phone"
                        name="phoneNumber"
                        placeholder="9876543211"
                        required
                        value={phoneNumber}
                        onChange={handleOnChange}

                    />

                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                    Hello, my name is
                    <span>
                        {firstName} {lastName}
                    </span>
                    . My email address is <span>{email}</span> and my phone number is
                    <span>{phoneNumber}</span>.
                </p>
            </section>
        </>
    );
};