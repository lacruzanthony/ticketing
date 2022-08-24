import { useState } from 'react';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <>
      <h1>Create a ticket</h1>
      <form>
        <div className="form-group mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Price</label>
          <input value={price} onBlur={onBlur} onChange={(e) => setPrice(e.target.value)} className="form-control" />
        </div>
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewTicket;
