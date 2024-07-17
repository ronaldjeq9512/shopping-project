import React from 'react';

export const OrderForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  return (
    <article className="col-md-6">
      <h2>Información de Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="firstName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="lastName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="address" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="phone" required />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Método de Pago</label>
          <select className="form-select" id="paymentMethod" required>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta_credito">Tarjeta de Crédito</option>
            <option value="tarjeta_debito">Tarjeta de Débito</option>
          </select>
        </div>
        <p className="text-muted">El pago se realiza contraentrega.</p>
        <button type="submit" className="btn btn-primary">Realizar Pedido</button>
      </form>
    </article>
  );
};