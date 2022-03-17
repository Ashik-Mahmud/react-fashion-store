import React, { useState } from "react";

export default function Mobile() {
  const [charge, setCharge] = useState(100);
  return (
    <div className="container text-center py-5">
      <div className="card w-25 m-auto">
        <div className="charge card-header p-5">
          Charge:{" "}
          <span
            className={`text-${
              charge >= 40 && charge < 70
                ? "warning"
                : charge < 40
                ? "danger"
                : "success"
            } h4 fw-bold`}
          >
            {charge}%
          </span>
        </div>
        <button
          onClick={() => {
            if (charge > 0) {
              setCharge(charge - 10);
            } else if (charge === 0) {
              setCharge(100);
            }
          }}
          className={`btn btn-${charge === 0 ? "success" : "danger"}`}
        >
          {charge === 0 ? "Get full Battery" : "Battery down"}
        </button>
      </div>
    </div>
  );
}
