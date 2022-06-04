import React from "react";
import { event } from ".";
import EventEmitter from "eventemitter3";

const EventContext = React.createContext<EventEmitter>(event);

const EventProvider: React.FC = ({ children }) => {
  return <EventContext.Provider value={event}>{children}</EventContext.Provider>;
};

export default EventProvider;

export const useEvent = () => {
  return React.useContext(EventContext);
};
