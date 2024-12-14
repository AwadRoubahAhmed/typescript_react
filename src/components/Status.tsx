// 4. Advanced Props => union, optional type ...

type StatusProps = {
  status?: "loading" | "complete" | "error";
};

export const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "complete") {
    message = "Data Fetched successfully...";
  } else if (status === "error") {
    message = "Error Fetching...";
  }
  return (
    <div className="bg-sky-400 mb-6">
      <h2>Status - {message}</h2>
    </div>
  );
};
