import { FaRegChartBar } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { SiCodecademy } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";

const links = [
  { id: 1, text: "profile", path: "/", icon: <ImProfile /> },
  { id: 2, text: "take quiz", path: "take-quiz", icon: <FaRegChartBar /> },
  { id: 3, text: "all courses", path: "all-courses", icon: <SiCodecademy /> },
  { id: 4, text: "add course", path: "add-course", icon: <FaWpforms /> },
  { id: 5, text: "stats", path: "stats", icon: <FaRegChartBar /> },
];

export default links;
