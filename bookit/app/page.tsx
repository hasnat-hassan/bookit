import Home from "@/components/Home";
import Error from "./error";
import { title } from "process";

export const metadata = {
  title: "HomePage - BookIT",
};

const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`, {
    cache: "no-cache",
  });
  return res.json();
};

export default async function HomePage() {
  const data = await getRooms();
  if (data?.message) {
    return <Error error={data} />;
  }

  return <Home data={data} />;
}
