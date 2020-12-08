import React, { useState } from 'react';
import styled from '@emotion/styled';

import { getYearDiff, brandIncrease, getPlanIncrease } from './../helper'

const FormField = styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const FormLaber = styled.label`
    flex: 0 0 100px;
`;
const FormSelect = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none; /*Remove default */
`;
const FormInputRadio = styled.input`
    margin: 0 1rem;
`;
const FormButton = styled.button`
    background-color:#00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform:uppercase;
    font-weight:bold;
    border:none;
    transition: background-color .3s ease;
    margin-top:2rem;

    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100 %;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({ setDetails}) => {

    const [ data, setData ] = useState({
        brand: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState(false);

    const { brand, year, plan } = data;

    //read data from form and save in state
    const getFormData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        //validate fields
        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        //base
        let cost = 2000;
        //get year diff
        const yearDiff = getYearDiff(year);
        //rest 3% by tear
        cost -= (yearDiff * .03) * cost;

        console.log(`YearDiff: ${yearDiff} - cost: ${cost}`)
        //Increase brand
        cost = brandIncrease(brand) * cost;
        console.log(`Cost: ${cost}`)

        //Increase brand
        cost = parseFloat(getPlanIncrease(plan) * cost).toFixed(2);
        console.log(`Cost: ${cost}`)

        setDetails({
            quote: cost,
            data
        });
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error? <Error>All fields are mandatory</Error> : null}
            <FormField>
                <FormLaber>Brand: </FormLaber>
                <FormSelect
                    name="brand"
                    value={brand}
                    onChange={getFormData}
                >
                    <option value="">--Select--</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asiatic">Asiatic</option>
                </FormSelect>
            </FormField>
            <FormField>
                <FormLaber>Year: </FormLaber>
                <FormSelect
                    name="year"
                    value={year}
                    onChange={getFormData}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </FormSelect>
            </FormField>
            <FormField>
                <FormLaber>Plan: </FormLaber>
                <FormInputRadio type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={getFormData}
                />Basic
                <FormInputRadio type="radio"
                    name="plan"
                    value="complete"
                    checked={plan === "complete"}
                    onChange={getFormData}
                />Complete
            </FormField>
            <FormButton type="submit">Search</FormButton>
        </form>
     );
}
 
export default Form;