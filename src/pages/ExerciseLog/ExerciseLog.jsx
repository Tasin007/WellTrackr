import ExerciseBanner from "./ExerciseBanner";

const ExerciseLog = () => {
  return (
    <div>
      <ExerciseBanner></ExerciseBanner>
      <h2>exerciseLog</h2>
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab">
        Beginner
        </a>
        <a role="tab" className="tab tab-active">
        Intermediate
        </a>
        <a role="tab" className="tab">
        Advanced
        </a>
      </div>
    </div>
  );
};

export default ExerciseLog;
