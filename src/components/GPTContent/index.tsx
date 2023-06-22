import History from "@/constants/History.constant";
import { useParams } from "react-router-dom";

export default function GPTContent() {
  const { id } = useParams();

  return <div style={{ color: "white" }}>{id}</div>;
}
