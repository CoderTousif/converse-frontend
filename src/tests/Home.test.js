import React from "react";
import Home from "../pages/Home";
import { shallow } from "@testing-library/react";

describe("Home", () => {
    it("should header component", () => {
        expect(shallow(<Home />)).toMatchSnapshot();
    });
});
