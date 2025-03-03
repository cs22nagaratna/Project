import React from "react";
import Dashboard from "./Dashboard"

export default{
    title:"Components/Dashboard",
    components:Dashboard,
};
const Template=(args)=><Dashboard {...args}/>
export const dashboard=Template.bind();
