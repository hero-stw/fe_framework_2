import React from "react";

export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => { 
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    e.target.value = value
    return e;
}