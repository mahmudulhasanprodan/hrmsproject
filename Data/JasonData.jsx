import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";

export const EmployeeInfoData = [
  {
    id: 1,
    title: "Employee Info",
    iconOne: <FaUser />,
    subcatagories: [
      { id: 1, InfoData: "Employee List" },
      { id: 2, InfoData: "Emergency Contact" },
    ],
  },
  {
    id: 2,
    title: "Attendance & Leave",
    iconOne: <FaEdit />,
    subcatagories: [
      { id: 1, InfoData: "Attendance Entry" },
      { id: 2, InfoData: "Daily Attendance Sheet" },
      { id: 3, InfoData: "Individual Attendance" },
      { id: 4, InfoData: "Monthly Attendance Sheet" },
      { id: 5, InfoData: "Leave Entry" },
      { id: 6, InfoData: "Leave History" },
    ],
  },
  {
    id: 3,
    title: "Automated AMS",
    iconOne: <AiOutlineBars />,
    subcatagories: [
      { id: 1, InfoData: "Registered Employee Info" },
      { id: 2, InfoData: "Employee Attendance Report" },
    ],
  },

  {
    id: 4,
    title: "Compensation",
    iconOne: <FaMoneyBillAlt />,
    subcatagories: [
      { id: 1, InfoData: "New Salary Sheet" },
      { id: 2, InfoData: "Monthly Salary Sheet" },
    ],
  },
  {
    id: 5,
    title: "Help",
    iconOne: <FaRegHandPointRight />,
    subcatagories: [{ id: 1, InfoData: "HRMS User Manual" }],
  },
];

