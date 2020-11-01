import React from "react";
import HorizontalBanner from "../../components/HorizontalBanner";
import PageHeader from "../../components/PageHeader";
import BasicCard from "../../components/BasicCard";
import TestingImageHeader from "../../assets/testing-header-min.jpg";
import TestingImage from "../../assets/testing.jpg";
import submitForm from "../../formSubmit";
import "./Testing.scss";

const Testing = () => (
  <div className="testing--wrapper">
    <PageHeader
      pageTitle="RAPID COVID-19 TESTING"
      pageImage={TestingImageHeader}
    />
    <p className="description">
      Rapid Point-of-Care test
      <br />
      Get results in 15-30 min (30 minutes guaranteed)
    </p>
    <BasicCard
      title="Rapid Covid Test Details:"
      videoLink={
        "//players.brightcove.net/81909694001/HJs9NIMfe_default/index.html?videoId=6169658484001"
      }
    >
      <ul>
        <li>
          Using FDA EUA test by DB Veritor<sup>TM</sup> System
        </li>
        <li>Immunoassay for detection of SARS-CoV-2 Antigen in Nasal Swab</li>
        <li>
          See video of Video of BD Veritor<sup>TM</sup> System
        </li>
      </ul>
    </BasicCard>
    <BasicCard
      title="How does it work?"
      videoLink={
        "//players.brightcove.net/81909694001/HJs9NIMfe_default/index.html?videoId=6182246412001"
      }
    >
      <p>
        <strong>Step 1:</strong> Drive up to parking lot at 3408 N Eastern
        Avenue, Los Angeles, CA 90032, stay in car, call 323-441-0751
      </p>
      <p>
        <strong>Step 2:</strong> Complete a quick screening over the phone
      </p>
      <p>
        <strong>Step 3:</strong> A team member will help perform the test
        yourself using a nasal swab. See video for sample collection.
      </p>
      <p>
        <strong>Step 4:</strong> Get results
      </p>
    </BasicCard>

    <p className="description">
      If you would like to schedule an appointment for testing, please fill out
      the contact form below:
    </p>

    <HorizontalBanner title="Contact Form" />

    <p className="description">All fields are required.</p>
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mlepyogz"
      method="POST"
    >
      <input
        id="fname"
        name="first name"
        placeholder="First Name"
        type="text"
      />
      <input id="lname" name="last name" placeholder="Last Name" type="text" />
      <input id="email" name="email" placeholder="Email Address" type="email" />
      <input
        id="phone"
        name="phone number"
        placeholder="Phone Number"
        type="tel"
      />
      <button type="submit">SUBMIT</button>
    </form>
  </div>
);

export default Testing;
