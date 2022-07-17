import Input from "@/Components/Input";
import Label from "@/Components/Label";
import React, { useEffect } from "react";
import Button from "@/Components/Button";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import ValidationErrors from "@/Components/ValidationErrors";

function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

      useEffect(() => {
          return () => {
              reset("password", "password_confirmation");
          };
      }, []);

       const onHandleChange = (event) => {
           setData(
               event.target.name,
               event.target.value
           );
       };

       const submit = (e) => {
           e.preventDefault();
           post(route("register"));
       };

    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="../images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-10 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="../images/moonton-white.svg" alt="" />
                        <div className="my-[20px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <ValidationErrors errors={errors} />
                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label forInput="name" value="Name" />
                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your fullname..."
                                        defaultValue="Ilman S"
                                        handleChange={onHandleChange}
                                        required
                                        isFocused={true}
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="email"
                                        value="Email address"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        defaultValue="ilmansunannudin"
                                        handleChange={onHandleChange}
                                        required
                                        value={data.email}
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label
                                        forInput="password_confirmation"
                                        value="Confirm Password"
                                    />
                                    <Input
                                        type="password"
                                        name="password_cofirmation"
                                        placeholder="Confirm Password"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button
                                    variant="primary"
                                    processing={processing}
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>

                                <Link href="/login">
                                    <Button
                                        className="w-full"
                                        variant="light-outline"
                                        processing={processing}
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
