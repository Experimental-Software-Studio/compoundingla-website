import CompoundingImage from './compounding-min.jpg';
import ImmunizationImage from './immunization.jpg';
import ConsultationImage from './consultation-min.jpg';
import TestingImage from './testing.jpg';

let services = [
    {
        title: "COMPOUNDING",
        image: CompoundingImage,
        description: "We prepare custom medications to dispense them in various pharmaceutical formulations.",
        path: "/compounding"
    },
    {
        title: "IMMUNIZATION",
        image: ImmunizationImage,
        description: "We are a Medicare part B mass immunizer, providing all vaccines you need.",
        path: "/immunization"
    },
    {
        title: "PHARMACOGENETIC TESTING AND CONSULTATION",
        image: ConsultationImage,
        description: "We offer pharmacogenetic testing and consultation and targeted testing for mental health and psychiatric medications. ",
        path: "/consultation"
    },
    {
        title: "COVID-19 TESTING",
        image: TestingImage,
        description: "We provide on-site point-of-care testing for COVID-19. Tests include detection of the novel coronavirus and antibodies. ",
        path: "/covid-testing"
    }
];
export default services;