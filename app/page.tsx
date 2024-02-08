import Calendar from "./components/calendar";

const Home = () => {
  const holidays: {
    date: Date;
    description: string;
    type: "fixed" | "optional"|"leave"|"special"|undefined;
  }[] = [
    {
      date: new Date(2024, 1, 1),
      description: "",
      type: "leave",
    },
    {
      date: new Date(2024, 1, 5),
      description: "",
      type: "special",
    },
    {
      date: new Date(2024, 0, 1),
      description: "New Year",
      type: "fixed",
    },
    {
      date: new Date(2024, 0, 26),
      description: "Republic Day",
      type: "fixed",
    },
    {
      date: new Date(2024, 3, 9),
      description: "Ugadi",
      type: "fixed",
    },
    {
      date: new Date(2024, 4, 1),
      description: "May Day",
      type: "fixed",
    },
    {
      date: new Date(2024, 7, 15),
      description: "Independence Day",
      type: "fixed",
    },
    {
      date: new Date(2024, 9, 2),
      description: "Gandhi Jayanti",
      type: "fixed",
    },
    {
      date: new Date(2024, 10, 1),
      description: "Kannada Rajotsava",
      type: "fixed",
    },
    {
      date: new Date(2024, 2, 25),
      description: "Holi",
      type: "optional",
    },
    {
      date: new Date(2024, 2, 29),
      description: "Good Friday",
      type: "optional",
    },
    {
      date: new Date(2024, 5, 17),
      description: "Eid al-Adha/Bakrid",
      type: "optional",
    },
    {
      date: new Date(2024, 7, 26),
      description: "Janmashtami",
      type: "optional",
    },
    {
      date: new Date(2024, 9, 31),
      description: "Diwali",
      type: "optional",
    },
    {
      date: new Date(2024, 11, 25),
      description: "Christmas",
      type: "optional",
    },
  ];

  return <Calendar holidays={holidays}></Calendar>;
};

export default Home;
