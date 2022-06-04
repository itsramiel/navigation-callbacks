import EventProvider from "./event/EventProvider";
import Navigation from "./navigation";

export default function App() {
  return (
    <EventProvider>
      <Navigation />
    </EventProvider>
  );
}
