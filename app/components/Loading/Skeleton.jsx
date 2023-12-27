const Skeleton = () => {
  return (
    <div className="border bg-base-100 skeleton w-full relative h-72">
      <div className="space-y-5">
        <p className="py-4 h-64 bg-base-300 skeleton"></p>
        <p className="py- bg-base-300 skeleton"></p>
      </div>
    </div>
  );
};

export default Skeleton;
