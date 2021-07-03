import {data} from './data.js'

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">IWant</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
        </div>
    </header>
    <main>
        <div className="row-center">
          {
            data.products.map(p =>(
              <div key={p.id} className="card">
                <a href={`/product/${p.id}`}>
                <img className="medium" src={p.image} alt="product" />
                </a>
                <div className="card-body">
                <a href={`/product/${p.id}`}>
                        <h2>{p.name}</h2>
                    </a>
                    <div className="rating">
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <div className="price">
                       {p.price} 
                    </div>
                </div>
            </div>
            ))
          }            
        </div>         
    </main>
    <footer className="row center">
        All Rigth Reserved
    </footer>
</div>   
  );
}

export default App;
