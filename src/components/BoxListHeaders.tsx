const BoxListHeaders = () => {
  return (
    <div className="mb-3 grid grid-cols-4 rounded-md bg-white p-5 md:grid-cols-5 md:p-3">
      <span>ID</span>
      <span>H x D x L (cm)</span>
      <span>Added at</span>
      <span className="hidden md:block">Modified at</span>
      <span>Comment</span>
    </div>
  );
};

export default BoxListHeaders;
