"use client";

import { useState } from "react";

type Option = { value: number; qty: string; weight: string; price: number };

const opts: Option[] = [
  { value: 2, qty: "2 pieces", weight: "500 - 600 gms", price: 325 },
  { value: 4, qty: "4 pieces", weight: "1 - 1.1 kgs", price: 650 },
];

export default function QuantitySelect() {
  const [selected, setSelected] = useState<Option>(opts[1]);
  const perPiece = selected.price / selected.value;

  return (
    <div className="buy-row">
      <div>
        <div className="price">₹{selected.price}</div>
        <div className="per-piece">₹{perPiece % 1 === 0 ? perPiece.toFixed(0) : perPiece.toFixed(1)} per piece</div>
      </div>
      <div className="qty">
        <label htmlFor="qty" className="qty-label">Quantity</label>
        <select
          id="qty"
          className="select"
          value={selected.value}
          onChange={(e) => {
            const v = Number(e.target.value);
            const next = opts.find((o) => o.value === v) || opts[0];
            setSelected(next);
          }}
        >
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.qty} ({o.weight})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
