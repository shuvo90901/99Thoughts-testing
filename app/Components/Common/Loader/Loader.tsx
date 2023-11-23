const Loader = () => {
  return (
    <div className="text-center">
      <div
        className={`spinner-border my flex items-center justify-center`}
        role="status"
      >
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    </div>
  );
};

export default Loader;
