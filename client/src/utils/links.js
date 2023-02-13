import { FaRegChartBar } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { SiCodecademy } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";

const links = [
  { id: 1, text: "stats", path: "/", icon: <FaRegChartBar /> },
  { id: 2, text: "all courses", path: "all-courses", icon: <SiCodecademy /> },
  { id: 3, text: "add course", path: "add-course", icon: <FaWpforms /> },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
];

export default links;
