import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Login() {
    return (
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img
                    src="../images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                    alt=""
                />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="../images/moonton-white.svg" alt="" />
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                <Label forInput="email" value="Email address" />

                                <Input
                                    type="email"
                                    name="email"
                                    className=""
                                    variant="primary"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <Label forInput="password" value="password" />

                                <Input
                                    type="password"
                                    name="password"
                                    className=""
                                    variant={"primary"}
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <Button type="button" variant="primary">
                                <span className="text-base text-white">
                                    Start Watching
                                </span>
                            </Button>
                            <Link className="" href={route("prototype.register")}>
                                <Button type="button" className="w-full" variant="light-outline">
                                    <span className="text-base text-white">
                                        Create new account
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
