import { useState } from "react";
import Card from "../components/Card/Card";
import NewElement from "../components/NewElement/NewElement";
import { useSerie } from "../hook/UseSeries";
const Serie = () => {
  const [page, setPage] = useState<number>(1);
  let [serie, maxpage, totalSerie] = useSerie({}, page);

  return (
    <>
      <div
        className="btn-toolbar mt-4 d-flex justify-content-center align-items-center flex-column"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setPage(1)}
          >
            1
          </button>
          {Number(maxpage) >= 2 &&
            Array.from({ length: Number(maxpage) - 1 }, (_, i) => {
              return (
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    setPage(i + 2);
                    console.log(i + 2);
                  }}
                  key={i}
                >
                  {i + 2}
                </button>
              );
            })}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <span className="badge text-bg-warning">
          Total Series {Number(totalSerie)}
        </span>
      </div>
      <div className="serie bg-dark">
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {page === 1 ? (
              <NewElement title={"Serie"}/>
            ) : (
              <></>
            )}
            {serie &&
              serie.map((item) => {
                return (
                  <Card
                    image={String(item.image)}
                    full_name={`${item.title}`}
                    id={String(item._id)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Serie;
