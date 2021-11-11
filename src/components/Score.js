import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getSteps } from "../eggs/steps";
import { finish } from "../eggs";

export function Score() {
  const steps = useSelector(getSteps);
  const dispatch = useDispatch();

  return useMemo(
    () => (
      <div
        style={{
          color: "yellow",
          fontWeight: "bold",
          margin: "1em auto",
          textAlign: "center",
          overflow: "auto",
          maxWidth: "100%",
          padding: "0 1em"
        }}
      >
        Keystrokes per Step
        <BarChart
          style={{
            margin: "1em auto",
            background: "white",
            fontWeight: "normal",
            borderRadius: "1em",
            padding: "1em",
            color: "black"
          }}
          width={50 * steps.length}
          height={300}
          data={steps.map((step, index) => ({
            name: `Step ${index + 1}`,
            Keystrokes: step.keystrokes
          }))}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Keystrokes" fill="#8884d8" />
        </BarChart>
        <br />
        <br />
        <br />
        <span onClick={() => dispatch(finish())} style={{ cursor: "pointer" }}>
          Home »
        </span>
      </div>
    ),
    [steps]
  );
}
