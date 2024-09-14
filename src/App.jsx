import logo from './logo.svg';
import s from './App.module.css';

function App() {
  return (

    <div className={s.mainContainer}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo here</div>
            <div>subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tvShowRetail}>Tv show detail</div>
      <div className={s.recommenedTvShow}>Recommended tv shows</div>
    </div>
  );
}

export default App;
