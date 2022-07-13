import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import React from "react";

function SubscriptionPlan() {
    return (
        <>
            <div className=" flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>
                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                  <SubscriptionCard isPremium={false}
                    name="Basic"
                    price={100000}
                    durationInMonth={1}
                    features={["feature 1", "feature 2", "feature 3"]}
                    

                  />
                    {/* For Greatest */}
                    <SubscriptionCard isPremium={true}
                      name="For Greatest"
                      price={299000}
                      durationInMonth={3}
                    features={['feature 1', 'feature 2', 'feature 3']}


                    />
                  
                </div>
                {/* /Pricing Card */}
            </div>
        </>
    );
}

SubscriptionPlan.layout = (page) => <Authenticated children={page} />;
export default SubscriptionPlan;
