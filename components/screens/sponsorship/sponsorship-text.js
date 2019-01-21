import Separator from "../../common/section-separator";
import UpcomingEvent from "./upcoming-event";
import Intro from "./intro";

export default () => {
  return (
    <div className="container pb-5">
      <Intro />
      <Separator />
      <UpcomingEvent />
    </div>
  );
};
