import CompoundingImage from "./compounding-min.jpg";
import ImmunizationImage from "./immunization.jpg";
import ConsultationImage from "./consultation-min.jpg";

let services = [
  {
    title: "COMPOUNDING",
    image: CompoundingImage,
    description:
      "We prepare custom medications to dispense them in various pharmaceutical formulations.",
    path: "/compounding",
  },
  {
    title: "IMMUNIZATION",
    image: ImmunizationImage,
    description:
      "We are a Medicare part B mass immunizer, providing all vaccines you need.",
    path: "/immunization",
  },
  {
    title: "PHARMACOGENETIC TESTING AND CONSULTATION",
    image: ConsultationImage,
    description:
      "We offer pharmacogenetic testing and consultation and targeted testing for mental health and psychiatric medications. ",
    path: "/consultation",
  },
];
export default services;
