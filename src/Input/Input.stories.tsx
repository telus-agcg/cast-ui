import * as React from "react";
import { storiesOf } from "@storybook/react";
import { number, boolean, select } from "@storybook/addon-knobs/react";

import { Input } from "./Input.component";
import { wInfo } from "../storybook-utils";

storiesOf("Input", module).add(
  "Input",
  wInfo(`

  ### Notes

  This is a Input

  ### Usage
  ~~~js
  <Input
    inputSize="md"
    disabled={false}
    type="text"
    required="false"
    autoComplete="on"
    maxLength="1000"}
  />
  ~~~`)(() => (
    <Input
      inputSize={select("inputSize", ["sm", "md", "lg"], "md")}
      type={select("type", ["text", "number", "email", "password"], "text")}
      disabled={boolean("disabled", false)}
      required={boolean("required", false)}
      autoComplete={select("autoComplete", ["on", "off"], "on")}
      maxLength={number("maxLength", 1000)}
    />
  ))
);
