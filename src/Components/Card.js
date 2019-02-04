import React from 'react';

const Card = (props) => {
  const btnStyle = 'btn btn-lg btn-block';
  const cards = props.cards.map((card, index) => {
    return (
      <div className="card mb-4 shadow-sm" key={index}>
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{card.title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{card.price}<small className="text-muted"> / mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>{card.list[0]}</li>
            <li>{card.list[1]}</li>
            <li>{card.list[2]}</li>
            <li>{card.list[3]}</li>
          </ul>
          <button type="button" className={btnStyle + ' ' + card.buttonColor}>{card.buttonTitle}</button>
        </div>
      </div>
    );
  });
  return (
    <div className="card-deck mb-3 text-center">{cards}</div>
  );
}

export default Card;
